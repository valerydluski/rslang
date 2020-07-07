import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_FULL_STATISTIC, SET_LEARN_WORDS_STATISTIC } from '../types';
import { INITIAL_STATISTIC } from '../../../config';
import putStatisticToApi from '../../../services/putStatisticToApi';
import createStatisticJSON from '../../../utils/createStatisticJSON';
import createGameEndData from '../../../utils/createGameEndData';
import { saveFullStatisticToStore } from '../action';
import createLearnWordsStatistic from '../../../utils/createLearnWordsStatistic';

function* workerStatus({ payload }) {
  const { gameName, Level, Page, wordsCollection, wrongWordsState, learnData } = payload;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const getLoginState = (state) => state.login;
  const getWordsPerPage = (state) => state.userSettings.settings[`${gameName}WordsPerPage`];
  const getMaxPage = (state) => state.maxPage.maxPage;
  const Statistic = yield select(getStatistic);
  const userData = yield select(getLoginState);
  const wordsPerPage = yield select(getWordsPerPage);
  const getDisplayedList = (state) => state.newLearnCardShow.displayedWordsList;
  const displayedWordsList = yield select(getDisplayedList);
  const maxPage = yield select(getMaxPage);
  let newStatistic;
  if (gameName) {
    newStatistic = yield createGameEndData(
      Level,
      Page,
      wordsCollection,
      Statistic,
      wrongWordsState,
      gameName,
      wordsPerPage,
      maxPage
    );
  } else if (learnData) {
    newStatistic = yield createLearnWordsStatistic(Statistic, learnData, displayedWordsList);
  } else {
    newStatistic = INITIAL_STATISTIC;
  }
  const sessionData = yield createStatisticJSON(newStatistic);
  console.log('function*workerStatus -> newStatistic', newStatistic);
  yield put(saveFullStatisticToStore(newStatistic));
  yield call(putStatisticToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest([SAVE_FULL_STATISTIC, SET_LEARN_WORDS_STATISTIC], workerStatus);
}
