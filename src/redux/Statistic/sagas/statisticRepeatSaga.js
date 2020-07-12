import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_REPEAT_STATISTIC } from '../types';
import createStatisticJSON from '../../../utils/createStatisticJSON';
import putStatisticToApi from '../../../services/putStatisticToApi';
import { saveFullStatisticToStore } from '../action';

function* workerStatus({ payload }) {
  const getStatistic = (state) => state.changeStatistic.statistic;
  const getLoginState = (state) => state.login;
  const userData = yield select(getLoginState);
  const Statistic = yield select(getStatistic);
  const newStatistic = { ...Statistic };
  newStatistic.countRepeatToday = payload;
  const sessionData = yield createStatisticJSON(newStatistic);
  yield call(putStatisticToApi, sessionData, userData);
  yield put(saveFullStatisticToStore(newStatistic));
}

export default function* repeatStatisticsWatcher() {
  yield takeLatest(SAVE_REPEAT_STATISTIC, workerStatus);
}
