import { takeLatest, select, call } from 'redux-saga/effects';
import SAVE_USER_SETTINGS from '../types';
import putSettingsToApi from '../../../services/putSettingsToApi';
import createSettingsJSON from '../../../utils/createSettingsJSON';

function* workerStatus() {
  const getSettings = (state) => state.userSettings.settings;
  const getLoginState = (state) => state.login;
  const settings = yield select(getSettings);
  const userData = yield select(getLoginState);
  const sessionData = yield createSettingsJSON(settings);
  yield call(putSettingsToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest(SAVE_USER_SETTINGS, workerStatus);
}
