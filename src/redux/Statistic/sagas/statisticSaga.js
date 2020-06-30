import { takeLatest, select, call } from 'redux-saga/effects';
import { SAVE_FULL_STATISTIC } from '../types';
import putStatisticToApi from '../../../services/putStatisticToApi';
import createStatisticJSON from '../../../utils/createStatisticJSON';

function* workerStatus() {
  const getStatistic = (state) => state.changeStatistic;
  const getLoginState = (state) => state.login;
  const statistic = yield select(getStatistic);
  const userData = yield select(getLoginState);
  const sessionData = yield createStatisticJSON(statistic);
  yield call(putStatisticToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest(SAVE_FULL_STATISTIC, workerStatus);
}
