import { put, takeEvery, select } from 'redux-saga/effects';
import { GET_REPEAT_WORDS } from '../types';
import {
  getRepeatWordsLoaderShow,
  getRepeatWordsLoaderHide,
  saveRepeatWords,
  isRepeatWordsLoadedHandler,
} from '../actions';

function* getRepeatWordsWorker() {
  yield put(getRepeatWordsLoaderShow());
  const getUserWords = (state) => state.userWords.words[0].paginatedResults;
  const userWords = yield select(getUserWords);
  const now = new Date().valueOf();
  const repeatWords = userWords.filter((data) => data.userWord.optional.nextRepeat < now);
  yield put(saveRepeatWords(repeatWords));
  yield put(isRepeatWordsLoadedHandler(true));
  yield put(getRepeatWordsLoaderHide());
}

export default function* getRepeatWordsWatcher() {
  yield takeEvery(GET_REPEAT_WORDS, getRepeatWordsWorker);
}
