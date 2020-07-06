import { select, takeLatest, put, call } from 'redux-saga/effects';
import { GENERATE_LEARN_WORDS_COLLECTION } from '../types';
import wordsFetch from '../../../services/getLearnWordsFromAPI';
import getAllUserWords from '../../../services/getAllUserWords';

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

const filterFn = (data, LearnLastWords, wordsPerDay) => {
  let newWords;
  if (+LearnLastWords === 0) newWords = 1;
  else newWords = LearnLastWords;
  const remainder = newWords % 50;
  const filterData = data.slice(remainder - 1, remainder - 1 + +wordsPerDay);
  return filterData;
};

const filterFn2 = (data, filterData, wordsPerDay) => {
  const newElCount = wordsPerDay - filterData.length;
  const newData = data.slice(0, newElCount);
  return filterData.concat(newData);
};

function* generateLearnWordsCollectionWorker() {
  const getSettings = (state) => state.userSettings.settings;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const { cardsPerDay, howToLearnWords, wordsPerDay } = yield select(getSettings);
  const { LearnLastWords, LearnLastLevel } = yield select(getStatistic);
  let data;
  let filterData;
  switch (howToLearnWords) {
    case 'allWords':
      data = yield call(wordsFetch, fn(LearnLastLevel, LearnLastWords));
      filterData = filterFn(data, LearnLastWords, wordsPerDay);
      if (filterData.length < wordsPerDay) {
        data = yield call(wordsFetch, fn2(LearnLastLevel, LearnLastWords));
        filterData = filterFn2(data, filterData, wordsPerDay);
      }
      filterData = filterData.map((el) => {
        const newEl = el;
        newEl.isNew = true;
        return newEl;
      });
      if (filterData.length < cardsPerDay) {
        const oldWordsCount = cardsPerDay - filterData.length;
        const getLoginState = (state) => state.login;
        const sessionData = yield select(getLoginState);
        const payload = yield call(getAllUserWords, sessionData);
        const userWords = payload[0].paginatedResults.slice(0, oldWordsCount);
        filterData = filterData.concat(userWords);
      }
      break;
    case 'newWords':
      data = yield call(wordsFetch, fn(LearnLastLevel, LearnLastWords));
      filterData = filterFn(data, LearnLastWords, wordsPerDay);
      if (filterData.length < wordsPerDay) {
        data = yield call(wordsFetch, fn2(LearnLastLevel, LearnLastWords));
        filterData = filterFn2(data, filterData, wordsPerDay);
      }
      filterData = filterData.map((el) => {
        const newEl = el;
        newEl.isNew = true;
        return newEl;
      });
      break;
    case 'repeat':
      if (cardsPerDay) {
        const getLoginState = (state) => state.login;
        const sessionData = yield select(getLoginState);
        const payload = yield call(getAllUserWords, sessionData);
        filterData = payload[0].paginatedResults.slice(0, cardsPerDay);
      }
      break;
    default:
      break;
  }
}

export default function* generateLearnWordsCollectionWatcher() {
  yield takeLatest(GENERATE_LEARN_WORDS_COLLECTION, generateLearnWordsCollectionWorker);
}
