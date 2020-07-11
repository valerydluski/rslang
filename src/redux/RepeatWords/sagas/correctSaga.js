import { put, takeEvery } from 'redux-saga/effects';
import checkHistoryLocation from '../../../utils/checkHistoryLocation';
import { correctCard } from '../actions';

function* correctWorker() {
  if (checkHistoryLocation(['/learn'])) {
    yield put(correctCard(false));
  }
}

export default function* correctRepeatWatcher() {
  yield takeEvery('@@redux-form/RESET', correctWorker);
}
