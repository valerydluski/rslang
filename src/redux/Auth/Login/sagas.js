import { takeLatest } from 'redux-saga/effects';
import { AUTH_TO_SERVER } from './types';

function* workerSubmit(action) {
  yield console.log(action);
}

export default function* watchSubmit() {
  yield takeLatest(AUTH_TO_SERVER, workerSubmit);
}
