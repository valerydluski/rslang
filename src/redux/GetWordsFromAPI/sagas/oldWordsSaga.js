import { takeLatest, select, call, put } from 'redux-saga/effects';
import { FETCH_OLD_WORDS } from '../types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getOldGamesWords';

function* workerStatus(action) {
  yield put(showLoader());
  const payload = yield call(wordsFetch, action.payload);
  console.log(payload);
  yield put(hideLoader());
}

export default function* watchStatus() {
  yield takeLatest(FETCH_OLD_WORDS, workerStatus);
}
