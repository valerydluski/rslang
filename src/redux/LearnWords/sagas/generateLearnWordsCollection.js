import { select, takeLatest, put, call } from 'redux-saga/effects';
import { GENERATE_LEARN_WORDS_COLLECTION } from '../types';
import getRandomValuesFromArray from '../../../utils/getRandomValuesFromArray';
import wordsFetch from '../../../services/getLearnWordsFromAPI';
import getAllUserWords from '../../../services/getAllUserWords';
import {
  saveLearnWordsCollection,
  wordsCollectionLoaderShow,
  wordsCollectionLoaderHide,
  isWordsCollectionLoadedHandler,
} from '../actions';
import { setLearnWordsStatistic } from '../../Statistic/action';

const fn = (LearnLastLevel, LearnLastWords) => {
  let newLevel;
  let newWords;
  if (+LearnLastLevel === 0) newLevel = 1;
  else newLevel = LearnLastLevel;
  if (+LearnLastWords === 0) newWords = 1;
  else newWords = LearnLastWords;
  return { level: newLevel, words: newWords };
};

const fn2 = (LearnLastLevel, LearnLastWords) => {
  let newLevel;
  let newWords;
  if (+LearnLastLevel === 0) newLevel = 1;
  else newLevel = LearnLastLevel;
  if (+LearnLastWords === 0) newWords = 1 + 50;
  else newWords = +LearnLastWords + 50;
  return { level: newLevel, words: newWords };
};

const filterFn = (data, LearnLastWords, wordsPerDay, payload) => {
  if (wordsPerDay < 1) return [];
  let newWords;
  if (+LearnLastWords === 0) newWords = 1;
  else newWords = LearnLastWords;
  const remainder = newWords % 50;
  const dataWithoutOldWords = data.filter((el) => !payload.includes(el.id));
  const filterData = dataWithoutOldWords.slice(remainder - 1, remainder - 1 + +wordsPerDay);
  return filterData;
};

const filterFn2 = (data, filterData, wordsPerDay, payload) => {
  if (wordsPerDay < 1) return [];
  const newElCount = wordsPerDay - filterData.length;
  const newData = data.slice(0, newElCount);
  return filterData.concat(newData);
};

function* generateLearnWordsCollectionWorker() {
  yield put(wordsCollectionLoaderShow());
  const getSettings = (state) => state.userSettings.settings;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const payload = yield call(getAllUserWords, sessionData);
  // eslint-disable-next-line no-underscore-dangle
  const userWordsID = payload[0].paginatedResults.map((el) => el.id || el._id);
  const { cardsPerDay, howToLearnWords, wordsPerDay } = yield select(getSettings);
  let { CountCardsShow, CountNewWordsToday, RepeatWordsToday } = yield select(getStatistic);
  const { LearnLastWords, LearnLastLevel, lastTrain } = yield select(getStatistic);
  let obj;
  if (new Date(lastTrain).getDate() !== new Date().getDate() && lastTrain !== '0') {
    CountCardsShow = '0';
    CountNewWordsToday = '0';
    RepeatWordsToday = [];
    obj = {
      learnData: {
        nextWord: +LearnLastWords,
        nextLevel: +LearnLastLevel,
        cardsShow: +CountCardsShow,
        countNewWordsShow: CountNewWordsToday,
        lastDateTraining: '0',
        RepeatWordsToday,
      },
    };
    yield put(setLearnWordsStatistic(obj));
  }

  let data;
  let filterData;
  switch (howToLearnWords) {
    case 'allWords':
      data = yield call(wordsFetch, fn(LearnLastLevel, LearnLastWords));
      filterData = filterFn(data, LearnLastWords, wordsPerDay - CountNewWordsToday, userWordsID);
      if (filterData.length < wordsPerDay - CountNewWordsToday) {
        data = yield call(wordsFetch, fn2(LearnLastLevel, LearnLastWords));
        filterData = filterFn2(data, filterData, wordsPerDay - CountNewWordsToday, userWordsID);
      }
      filterData = filterData.map((el) => {
        const newEl = el;
        newEl.isNew = true;
        return newEl;
      });
      if (filterData.length < cardsPerDay) {
        const oldWordsCount = cardsPerDay - filterData.length - CountCardsShow;
        const arrRepeat = payload[0].paginatedResults.filter(
          (el) => !RepeatWordsToday.includes(el.word)
        );
        const userWords = getRandomValuesFromArray(arrRepeat, oldWordsCount);
        filterData = filterData.concat(userWords);
      }
      break;
    case 'newWords':
      data = yield call(wordsFetch, fn(LearnLastLevel, LearnLastWords));
      filterData = filterFn(data, LearnLastWords, wordsPerDay - CountNewWordsToday, userWordsID);
      if (filterData.length < wordsPerDay - CountNewWordsToday) {
        data = yield call(wordsFetch, fn2(LearnLastLevel, LearnLastWords));
        filterData = filterFn2(data, filterData, wordsPerDay - CountNewWordsToday, userWordsID);
      }
      filterData = filterData.map((el) => {
        const newEl = el;
        newEl.isNew = true;
        return newEl;
      });
      break;
    case 'repeat':
      if (cardsPerDay) {
        const arrRepeat = payload[0].paginatedResults.filter(
          (el) => !RepeatWordsToday.includes(el.word)
        );
        filterData = getRandomValuesFromArray(arrRepeat, cardsPerDay - CountCardsShow);
      }
      break;
    default:
      break;
  }
  yield put(saveLearnWordsCollection(filterData));
  yield put(isWordsCollectionLoadedHandler(true));
  yield put(wordsCollectionLoaderHide());
}

export default function* generateLearnWordsCollectionWatcher() {
  yield takeLatest(GENERATE_LEARN_WORDS_COLLECTION, generateLearnWordsCollectionWorker);
}
