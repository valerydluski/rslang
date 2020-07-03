import { takeEvery, call, put, select, take } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import REGISTER_TO_SERVER from './types';
import { authToServer } from '../Login/actions';
import signUp from '../../../services/signUp';
import { saveUserSettingsToStore, saveUserSettingsToAPI } from '../../UserSettings/actions';
import { saveFullStatistic } from '../../Statistic/action';
import { SAVE_SESSION_DATA } from '../Login/types';

function* workerRegistration(action) {
  const { name, ...userSettings } = action.payload;
  try {
    const getSettings = (state) => state.userSettings.settings;
    const getStatistic = (state) => state.changeStatistic.statistic;
    const settings = yield select(getSettings);
    const statistic = yield select(getStatistic);
    settings.name = name;
    yield call(signUp, userSettings);
    yield put(saveUserSettingsToStore(settings));
    yield put(authToServer(userSettings));
    yield take(SAVE_SESSION_DATA);
    yield put(saveUserSettingsToAPI(settings));
    yield put(saveFullStatistic(statistic.statistic || statistic));
  } catch (e) {
    toast.error('error registration');
  }
}

export default function* watchRegistration() {
  yield takeEvery(REGISTER_TO_SERVER, workerRegistration);
}
