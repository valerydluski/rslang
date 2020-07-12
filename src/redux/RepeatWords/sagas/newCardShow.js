import { takeEvery, select, put } from 'redux-saga/effects';
import { SHOW_CARD } from '../types';
import { setRepeatStatistic } from '../../Statistic/action';

function* showRepeatCardWorker() {
  const getCurrentShowCardCount = (state) => state.changeStatistic.statistic.countRepeatToday;
  const currentShowCardCount = yield select(getCurrentShowCardCount);
  yield put(setRepeatStatistic(currentShowCardCount + 1));
}

export default function* showRepeatCardWatcher() {
  yield takeEvery(SHOW_CARD, showRepeatCardWorker);
}
