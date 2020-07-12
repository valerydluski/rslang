import { put, takeEvery, select, call } from 'redux-saga/effects';
import { GET_REPEAT_WORDS } from '../types';
import {
  getRepeatWordsLoaderShow,
  getRepeatWordsLoaderHide,
  saveRepeatWords,
  isRepeatWordsLoadedHandler,
  setIsMoreCardsShowToday,
} from '../actions';
import getRandomValuesFromArray from '../../../utils/getRandomValuesFromArray';
import getAggregatedUserWords from '../../../services/getAggregatedUserWords';

function* getRepeatWordsWorker() {
  yield put(getRepeatWordsLoaderShow());
  let repeatWords;

  const getIsDifficultMode = (state) => state.repeatWords.isDifficultMode;
  const isDifficultMode = yield select(getIsDifficultMode);

  if (isDifficultMode) {
    const getSessionData = (state) => state.login;
    const sessionData = yield select(getSessionData);

    const payload = yield call(getAggregatedUserWords, sessionData, 'difficult');
    repeatWords = payload[0].paginatedResults;

    yield put(setIsMoreCardsShowToday(false));
  } else {
    const getUserWords = (state) => state.userWords.words[0].paginatedResults;
    const userWords = yield select(getUserWords);

    const getCardsShowCount = (state) => state.userSettings.settings.cardsPerDayRepeat;
    const cardsShowCount = yield select(getCardsShowCount);

    const getCardsShowedCountToday = (state) => state.changeStatistic.statistic.countRepeatToday;
    const cardsShowedCountToday = yield select(getCardsShowedCountToday);

    const cardsToShow = cardsShowCount - cardsShowedCountToday;

    const now = new Date().valueOf();
    repeatWords = userWords.filter((data) => data.userWord.optional.nextRepeat < now);

    if (cardsShowCount > repeatWords.length) {
      repeatWords = getRandomValuesFromArray(repeatWords, cardsToShow);
      yield put(setIsMoreCardsShowToday(true));
    }
  }

  yield put(saveRepeatWords(repeatWords));
  yield put(isRepeatWordsLoadedHandler(true));
  yield put(getRepeatWordsLoaderHide());
}

export default function* getRepeatWordsWatcher() {
  yield takeEvery(GET_REPEAT_WORDS, getRepeatWordsWorker);
}
