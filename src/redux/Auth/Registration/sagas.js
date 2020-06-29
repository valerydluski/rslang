import { takeEvery, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import REGISTER_TO_SERVER from './types';
import { authToServer } from '../Login/actions';
import { saveUserName } from '../../UserSettings/actions';
import signUp from '../../../services/signUp';

function* workerRegistration(action) {
  const { name, ...userSettings } = action.payload;
  try {
    const getSettings = (state) => state.userSettings.settings;
    const settings = yield select(getSettings);
    settings.name = name || 'user';
    yield call(signUp, userSettings);
    yield put(saveUserName(settings));
    yield put(authToServer(userSettings));
  } catch (e) {
    toast.error('error');
  }
}

export default function* watchRegistration() {
  yield takeEvery(REGISTER_TO_SERVER, workerRegistration);
}
