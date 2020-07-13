import { select, call, put, takeEvery, take } from 'redux-saga/effects';
import { NEW_CARD_SHOW } from '../types';
import saveOneWord from '../../../services/saveOneWord';
import { setLearnWordsStatistic } from '../../Statistic/action';
import { addToShowedWordsList, loadingWordToServer } from '../actions';
import findObjInArray from '../../../utils/findObjInArray';
import { saveUserWords } from '../../Dictionary/actions';
import { SAVE_FULL_STATISTIC_TO_STORE } from '../../Statistic/types';

const WORDS_PER_LEVEL = 600;

function* addNewWordSagaWorker(action) {
  yield put(loadingWordToServer(true));
  const getLoginState = (state) => state.login;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const { LearnLastWords, LearnLastLevel, CountCardsShow, CountNewWordsToday } = yield select(
    getStatistic
  );

  const getDisplayedList = (state) => state.newLearnCardShow.displayedWordsList;
  const getUserWords = (state) => state.userWords.words;
  const words = yield select(getUserWords);
  const userWords = words[0].paginatedResults;
  const displayedWordsList = yield select(getDisplayedList);
  let nextLevel = LearnLastLevel;
  let nextWord = LearnLastWords;
  const sessionData = yield select(getLoginState);
  // eslint-disable-next-line no-underscore-dangle
  const wordId = action.payload.id || action.payload._id;
  const { isNew, word, image } = action.payload;
  const isKnown = findObjInArray(userWords, '_id', wordId);
  if (isNew || !isKnown) {
    const config = {
      difficulty: 'new',
      optional: {
        time: new Date().valueOf(),
        deleted: false,
        difficult: false,
        nextRepeat: new Date().valueOf(),
        repeats: 1,
        partOfSpeechCode: action.payload.partOfSpeechCode,
      },
    };
    yield call(saveOneWord, wordId, config, sessionData, action.payload.word);
    [, nextWord] = image
      .replace(/0|.jpg/g, '')
      .split('/')[1]
      .split('_');
    if (+nextWord === 3600) {
      nextWord = 600;
      nextLevel = 6;
    } else {
      nextLevel = Math.ceil(nextWord / WORDS_PER_LEVEL);
      nextWord %= WORDS_PER_LEVEL;
    }
    const elForStore = action.payload;
    elForStore.userWord = config;
    words[0].paginatedResults = words[0].paginatedResults.concat(elForStore);
    yield saveUserWords(words);
  }

  const cardsShow = +CountCardsShow + 1;
  let countNewWordsShow = CountNewWordsToday;
  if (isNew) countNewWordsShow = +CountNewWordsToday + 1;
  const lastDateTraining = new Date();
  const obj = {
    learnData: {
      nextWord: +nextWord,
      nextLevel: +nextLevel,
      cardsShow,
      countNewWordsShow,
      lastDateTraining,
    },
  };
  displayedWordsList.push(word);
  yield put(addToShowedWordsList(displayedWordsList));
  yield put(setLearnWordsStatistic(obj));
  yield take(SAVE_FULL_STATISTIC_TO_STORE);
  yield put(loadingWordToServer(false));
}

export default function* addNewWordSagaWatcher() {
  yield takeEvery(NEW_CARD_SHOW, addNewWordSagaWorker);
}
