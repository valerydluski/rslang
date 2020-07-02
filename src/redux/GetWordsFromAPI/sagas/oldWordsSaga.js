import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_OLD_WORDS } from '../types';
import { hideLoaderOldGame, showLoaderOldGame } from '../../Loader/LoadOldWords/action';
import wordsFetch from '../../../services/getOldGamesWords';
import { saveOldWords } from '../action';

function* workerStatus(action) {
  yield put(showLoaderOldGame());
  const payload = yield call(wordsFetch, action.payload);
  yield put(saveOldWords(payload));
  yield put(hideLoaderOldGame());
}

export default function* watchStatus() {
  yield takeLatest(FETCH_OLD_WORDS, workerStatus);
}
