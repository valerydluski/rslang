import { put, takeEvery, select } from 'redux-saga/effects';
import { GET_REPEAT_WORDS } from '../types';
import {
  getRepeatWordsLoaderShow,
  getRepeatWordsLoaderHide,
  saveRepeatWords,
  isRepeatWordsLoadedHandler,
  setIsMoreCardsShowToday,
} from '../actions';
import getRandomValuesFromArray from '../../../utils/getRandomValuesFromArray';

function* getRepeatWordsWorker() {
  yield put(getRepeatWordsLoaderShow());
  const getUserWords = (state) => state.userWords.words[0].paginatedResults;
  const userWords = yield select(getUserWords);

  const getCardsShowCount = (state) => state.userSettings.settings.cardsPerDayRepeat;
  const cardsShowCount = yield select(getCardsShowCount);

  const getCardsShowedCountToday = (state) => state.changeStatistic.statistic.countRepeatToday;
  const cardsShowedCountToday = yield select(getCardsShowedCountToday);

  const cardsToShow = cardsShowCount - cardsShowedCountToday;

  const now = new Date().valueOf();
  let repeatWords = userWords.filter((data) => data.userWord.optional.nextRepeat < now);

  if (cardsShowCount > repeatWords.length) {
    repeatWords = getRandomValuesFromArray(repeatWords, cardsToShow);
    yield put(setIsMoreCardsShowToday(true));
  }

  yield put(saveRepeatWords(repeatWords));
  yield put(isRepeatWordsLoadedHandler(true));
  yield put(getRepeatWordsLoaderHide());
}

export default function* getRepeatWordsWatcher() {
  yield takeEvery(GET_REPEAT_WORDS, getRepeatWordsWorker);
}
