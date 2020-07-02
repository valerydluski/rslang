import { takeLatest, select, call, put } from 'redux-saga/effects';
import { FETCH_OLD_WORDS } from '../types';
import putSettingsToApi from '../../../services/putSettingsToApi';

function* workerStatus(action) {
  console.log(action, 'asdasdas');
  const state = yield select();
  console.log('function*workerStatus -> state', state);
  // yield call(putSettingsToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest(FETCH_OLD_WORDS, workerStatus);
}
