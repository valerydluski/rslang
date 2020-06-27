import { takeEvery, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import REGISTER_TO_SERVER from './types';
import { authToServer } from '../Login/actions';
import saveUserSettings from '../../UserSettings/actions';
import signUp from '../../../services/signUp';

function* workerRegistration(action) {
  const { name, ...userSettings } = action.payload;
  try {
    yield call(signUp, userSettings);
    yield put(authToServer(userSettings));
    yield put(saveUserSettings(name));
  } catch (e) {
    toast.error('error');
  }
}

export default function* watchRegistration() {
  yield takeEvery(REGISTER_TO_SERVER, workerRegistration);
}
