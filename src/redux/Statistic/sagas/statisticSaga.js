import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_FULL_STATISTIC, SET_LEARN_WORDS_STATISTIC } from '../types';
import { INITIAL_STATISTIC } from '../../../config';
import putStatisticToApi from '../../../services/putStatisticToApi';
import createStatisticJSON from '../../../utils/createStatisticJSON';
import createGameEndData from '../../../utils/createGameEndData';
import { saveFullStatisticToStore } from '../action';
import createLearnWordsStatistic from '../../../utils/createLearnWordsStatistic';
import updateOneWord from '../../../services/updateOneWord';
import saveOneWord from '../../../services/saveOneWord';
import { saveOneUserWords } from '../../Dictionary/actions';

function* workerStatus({ payload }) {
  const { gameName, Level, Page, wordsCollection, wrongWordsState, learnData } = payload;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const getLoginState = (state) => state.login;
  const getWordsPerPage = (state) => state.userSettings.settings[`${gameName}WordsPerPage`];
  const getMaxPage = (state) => state.maxPage.maxPage;
  const getUserWords = (state) => state.userWords.words;
  const getDisplayedList = (state) => state.newLearnCardShow.displayedWordsList;
  const words = yield select(getUserWords);
  const userWords = words[0].paginatedResults;
  const userData = yield select(getLoginState);
  const Statistic = yield select(getStatistic);
  const wordsPerPage = yield select(getWordsPerPage);
  const displayedWordsList = yield select(getDisplayedList);
  const maxPage = yield select(getMaxPage);
  if (wordsCollection) {
    wordsCollection.forEach((element) => {
      // eslint-disable-next-line no-underscore-dangle
      const word = userWords.find((item) => item.id || item._id === element.id);
      if (word && wrongWordsState.includes(element.word)) {
        const config = word.userWord;
        config.optional.nextRepeat = new Date().valueOf();
        updateOneWord(element.id, config, userData);
      } else {
        const config = {
          difficulty: 'new',
          optional: {
            time: new Date().valueOf(),
            deleted: false,
            difficult: false,
            nextRepeat: new Date().valueOf(),
            repeats: 1,
          },
        };
        words[0].paginatedResults = words[0].paginatedResults.concat(element);
        saveOneWord(element.id, config, userData);
        saveOneUserWords(words);
      }
    });
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
  yield put(saveFullStatisticToStore(newStatistic));
  yield call(putStatisticToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest([SAVE_FULL_STATISTIC, SET_LEARN_WORDS_STATISTIC], workerStatus);
}
