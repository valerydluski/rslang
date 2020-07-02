import { takeLatest, select, call, put } from 'redux-saga/effects';
import { FETCH_OLD_WORDS } from '../types';
import { hideLoaderOldGame, showLoaderOldGame } from '../../Loader/action';
import wordsFetch from '../../../services/getOldGamesWords';

function* workerStatus(action) {
  yield put(showLoaderOldGame());
  const payload = yield call(wordsFetch, action.payload);
  console.log(payload);
  yield put(hideLoaderOldGame());
}

export default function* watchStatus() {
  yield takeLatest(FETCH_OLD_WORDS, workerStatus);
}
