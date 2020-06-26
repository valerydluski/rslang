import { takeEvery, call } from 'redux-saga/effects';
import { RESET_SESSION_DATA } from '../types';
import history from '../../../../utils/history';

function* workerLogout() {
  const { pathname } = history.location;
  if (pathname !== '/login' && pathname !== '/registration') {
    yield call(history.push, '/login');
  }
}

export default function* watchLogout() {
  yield takeEvery(RESET_SESSION_DATA, workerLogout);
}
