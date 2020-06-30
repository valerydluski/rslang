import { takeEvery, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AUTH_TO_SERVER } from '../types';
import { saveSessionData } from '../actions';
import signIn from '../../../../services/signIn';
import history from '../../../../utils/history';
import { saveUserSettings } from '../../../UserSettings/actions';
import { getUserWords } from '../../../Dictionary/actions';
import { saveFullStatistic } from '../../../Statistic/action';

function* workerLogin(action) {
  try {
    const payload = yield call(signIn, action.payload);
    const getSettings = (state) => state.userSettings.settings;
    const getStatistic = (state) => state.changeStatistic.statistic;
    const settings = yield select(getSettings);
    const statistic = yield select(getStatistic);
    if (payload) {
      payload.isLogin = true;
      yield put(saveSessionData(payload));
      yield put(saveUserSettings(settings));
      yield put(saveFullStatistic(statistic));
      yield put(getUserWords());
      yield call(history.push, '/home');
    }
  } catch (e) {
    toast.error('error');
  }
}

export default function* watchLogin() {
  yield takeEvery(AUTH_TO_SERVER, workerLogin);
}
