import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTH_TO_SERVER } from '../types';
import { saveSessionData } from '../actions';
import signIn from '../../../../services/signIn';
import { forwardTo } from '../../../../utils/history';

function* workerLogin(action) {
  const payload = yield call(signIn, action.payload);
  if (payload) {
    payload.isLogin = true;
    yield put(saveSessionData(payload));
    yield call(forwardTo, '/');
  }
}

export default function* watchLogin() {
  yield takeEvery(AUTH_TO_SERVER, workerLogin);
}
