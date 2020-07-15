import { setLocale } from 'react-redux-i18n';
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_USER_SETTINGS_TO_API } from '../types';
import putSettingsToApi from '../../../services/putSettingsToApi';
import createSettingsJSON from '../../../utils/createSettingsJSON';
import { resetSessionData } from '../../Auth/Login/actions';

function* workerStatus() {
  try {
    const getSettings = (state) => state.userSettings.settings;
    const getLoginState = (state) => state.login;
    const settings = yield select(getSettings);
    const userData = yield select(getLoginState);
    const sessionData = yield createSettingsJSON(settings);
    yield call(putSettingsToApi, sessionData, userData);
    yield put(setLocale(settings.language));
  } catch (error) {
    resetSessionData();
  }
}

export default function* watchStatus() {
  yield takeLatest(SAVE_USER_SETTINGS_TO_API, workerStatus);
}
