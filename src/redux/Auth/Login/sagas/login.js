import { takeEvery, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AUTH_TO_SERVER } from '../types';
import { saveSessionData } from '../actions';
import signIn from '../../../../services/signIn';
import history from '../../../../utils/history';

function* workerLogin(action) {
  try {
    const payload = yield call(signIn, action.payload);
    if (payload) {
      payload.isLogin = true;
      yield put(saveSessionData(payload));
      yield call(history.push, '/home');
    }
  } catch (e) {
    toast.error('login error');
  }
}

export default function* watchLogin() {
  yield takeEvery(AUTH_TO_SERVER, workerLogin);
}
