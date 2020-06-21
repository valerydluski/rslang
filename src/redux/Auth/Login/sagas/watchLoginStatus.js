import { takeLatest, select, put, call } from 'redux-saga/effects';
import { CHECK_SESSION_STATUS } from '../types';
import { resetSessionData } from '../actions';
import checkToken from '../../../../services/checkToken';

function* workerStatus() {
  try {
    const getLoginState = (state) => state.login;
    const sessionData = yield select(getLoginState);
    yield call(checkToken, sessionData);
  } catch (e) {
    put(resetSessionData());
  }
}

export default function* watchStatus() {
  yield takeLatest(CHECK_SESSION_STATUS, workerStatus);
}
