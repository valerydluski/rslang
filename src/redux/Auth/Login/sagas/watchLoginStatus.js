import { takeLatest, select, put, call } from 'redux-saga/effects';
import { CHECK_SESSION_STATUS } from '../types';
import { resetSessionData } from '../actions';
import checkToken from '../../../../services/checkToken';
import history from '../../../../utils/history';

function* workerStatus() {
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const data = yield call(checkToken, sessionData);
  if (!data) {
    yield put(resetSessionData());
    const { pathname } = history.location;
    if (pathname !== '/login' && pathname !== '/registration') {
      yield call(history.push, '/');
    }
  }
}

export default function* watchStatus() {
  yield takeLatest(CHECK_SESSION_STATUS, workerStatus);
}
