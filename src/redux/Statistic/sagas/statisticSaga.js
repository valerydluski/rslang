import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_FULL_STATISTIC, SET_LEARN_WORDS_STATISTIC } from '../types';
import { INITIAL_STATISTIC } from '../../../config';
import putStatisticToApi from '../../../services/putStatisticToApi';
import createStatisticJSON from '../../../utils/createStatisticJSON';
import createGameEndData from '../../../utils/createGameEndData';
import { saveFullStatisticToStore } from '../action';
import createLearnWordsStatistic from '../../../utils/createLearnWordsStatistic';
import { saveWordsFromGames } from '../../Dictionary/actions';

function* workerStatus({ payload }) {
  const { gameName, Level, Page, wordsCollection, wrongWordsState, learnData } = payload;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const getLoginState = (state) => state.login;
  const getWordsPerPage = (state) => state.userSettings.settings[`${gameName}WordsPerPage`];
  const getMaxPage = (state) => state.maxPage.maxPage;
  const getDisplayedList = (state) => state.newLearnCardShow.displayedWordsList;
  const userData = yield select(getLoginState);
  const Statistic = yield select(getStatistic);
  const wordsPerPage = yield select(getWordsPerPage);
  const displayedWordsList = yield select(getDisplayedList);
  const maxPage = yield select(getMaxPage);
  if (wordsCollection) {
    yield put(saveWordsFromGames({ wordsCollection, wrongWordsState }));
  }
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
  yield call(putStatisticToApi, sessionData, userData);
  yield put(saveFullStatisticToStore(newStatistic));
}

export default function* watchStatus() {
  yield takeLatest([SAVE_FULL_STATISTIC, SET_LEARN_WORDS_STATISTIC], workerStatus);
}
