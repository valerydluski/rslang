import { takeLatest } from 'redux-saga/effects';
import { submit } from 'redux-form';

function* workerSubmit() {
  yield console.log('123');
}

export default function* watchSubmit() {
  yield takeLatest('@@redux-form/SET_SUBMIT_SUCCEEDED', workerSubmit);
}
