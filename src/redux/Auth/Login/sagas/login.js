import { takeEvery, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AUTH_TO_SERVER } from '../types';
import { saveSessionData } from '../actions';
import signIn from '../../../../services/signIn';
import history from '../../../../utils/history';
import { saveUserSettings } from '../../../UserSettings/actions';

function* workerLogin(action) {
  try {
    const payload = yield call(signIn, action.payload);
    const getSettings = (state) => state.userSettings.settings;
    const settings = yield select(getSettings);
    if (payload) {
      payload.isLogin = true;
      yield put(saveSessionData(payload));
      yield call(history.push, '/home');
      yield put(saveUserSettings(settings));
    }
  } catch (e) {
    toast.error('error');
  }
}

export default function* watchLogin() {
  yield takeEvery(AUTH_TO_SERVER, workerLogin);
}
