import { takeLatest, select, call, put } from 'redux-saga/effects';
import { NEW_CARD_SHOW } from '../types';
import saveOneWord from '../../../services/saveOneWord';
import findObjInArray from '../../../utils/findObjInArray';
import { WORDS_PER_PAGE } from '../../../config';
import { setLearnWordsStatistic } from '../../Statistic/action';

function* addNewWordSagaWorker(action) {
  const getUserWords = (state) => state.userWords.words;
  const userWords = yield select(getUserWords);
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  // eslint-disable-next-line no-underscore-dangle
  const wordId = action.payload.id || action.payload._id;
  const isKnownWord = yield call(
    findObjInArray,
    userWords[0].paginatedResults,
    '_id',
    // eslint-disable-next-line no-underscore-dangle
    wordId
  );
  if (!isKnownWord) {
    const config = {
      difficulty: 'new',
      optional: {
        time: new Date().valueOf(),
        deleted: false,
        difficult: false,
      },
    };
    yield call(saveOneWord, wordId, config, sessionData);
    const getStatistic = (state) => state.changeStatistic.statistic;
    const { LearnLastWords, LearnLastLevel, CountCardsShow, CountNewWordsToday } = yield select(
      getStatistic
    );
    const nextWord = +LearnLastWords + 1 > +WORDS_PER_PAGE ? 1 : +LearnLastWords + 1;
    const nextLevel = +LearnLastWords + 1 > +WORDS_PER_PAGE ? +LearnLastLevel + 1 : +LearnLastLevel;
    const cardsShow = +CountCardsShow + 1;
    const countNewWordsShow = +CountNewWordsToday + 1;
    const lastDateTraining = new Date();
    const obj = {
      learnData: {
        nextWord,
        nextLevel,
        cardsShow,
        countNewWordsShow,
        lastDateTraining,
      },
    };
    console.log('function*addNewWordSagaWorker -> obj', obj);
    yield put(setLearnWordsStatistic(obj));
  }
}

export default function* addNewWordSagaWatcher() {
  yield takeLatest(NEW_CARD_SHOW, addNewWordSagaWorker);
}
