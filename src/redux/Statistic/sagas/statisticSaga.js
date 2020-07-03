import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_FULL_STATISTIC } from '../types';
import { INITIAL_STATISTIC } from '../../../config';
import putStatisticToApi from '../../../services/putStatisticToApi';
import createStatisticJSON from '../../../utils/createStatisticJSON';
import createGameEndData from '../../../utils/createGameEndData';
import { saveFullStatisticToStore } from '../action';

function* workerStatus({ payload }) {
  const { gameName, Level, Page, wordsCollection, wrongWordsState } = payload;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const getLoginState = (state) => state.login;
  const getWordsPerPage = (state) => state.userSettings.settings[`${gameName}WordsPerPage`];
  const Statistic = yield select(getStatistic);
  const userData = yield select(getLoginState);
  const wordsPerPage = yield select(getWordsPerPage);
  let newStatistic;
  if (gameName) {
    newStatistic = yield createGameEndData(
      Level,
      Page,
      wordsCollection,
      Statistic,
      wrongWordsState,
      gameName,
      wordsPerPage
    );
  } else {
    newStatistic = INITIAL_STATISTIC;
  }
  const sessionData = yield createStatisticJSON(newStatistic);
  yield put(saveFullStatisticToStore(newStatistic));
  yield call(putStatisticToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest(SAVE_FULL_STATISTIC, workerStatus);
}
