import { takeEvery, call, put, select } from 'redux-saga/effects';
import { LOAD_DATA_FROM_API } from '../types';
import { isDataLoadFromApi } from '../actions';
import { getStatistic } from '../../Statistic/action';
import getSettings from '../../../utils/getSettings';
import getStatisticFromApi from '../../../services/getStatisticFromApi';
import getSettingsFromApi from '../../../services/getSettingsFromApi';
import { saveUserName } from '../../UserSettings/actions';
import { getUserWords } from '../../Dictionary/actions';

function* workerLoadData() {
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);

  const statistic = yield call(getStatisticFromApi, sessionData);
  if (statistic) {
    const statisticFromApi = getSettings(statistic);
    yield put(getStatistic(statisticFromApi));
  }

  const settings = yield call(getSettingsFromApi);
  if (settings) {
    const settingsFromApi = getSettings(settings);
    yield put(saveUserName(settingsFromApi));
  }

  yield put(getUserWords());

  yield put(isDataLoadFromApi());
}

export default function* watchLoadData() {
  yield takeEvery(LOAD_DATA_FROM_API, workerLoadData);
}
