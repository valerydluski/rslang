import { takeLatest, select, call, put } from 'redux-saga/effects';
import { NEW_CARD_SHOW } from '../types';
import saveOneWord from '../../../services/saveOneWord';
import { WORDS_PER_PAGE } from '../../../config';
import { setLearnWordsStatistic } from '../../Statistic/action';
import { addToShowedWordsList } from '../actions';

function* addNewWordSagaWorker(action) {
  const getLoginState = (state) => state.login;
  const getStatistic = (state) => state.changeStatistic.statistic;
  const { LearnLastWords, LearnLastLevel, CountCardsShow, CountNewWordsToday } = yield select(
    getStatistic
  );
  const getDisplayedList = (state) => state.newLearnCardShow.displayedWordsList;
  const displayedWordsList = yield select(getDisplayedList);
  let nextLevel;
  let nextWord;
  const sessionData = yield select(getLoginState);
  // eslint-disable-next-line no-underscore-dangle
  const wordId = action.payload.id || action.payload._id;
  const { isNew, word } = action.payload;
  if (isNew) {
    const config = {
      difficulty: 'new',
      optional: {
        time: new Date().valueOf(),
        deleted: false,
        difficult: false,
      },
    };
    yield call(saveOneWord, wordId, config, sessionData);
    nextWord = +LearnLastWords + 1 > +WORDS_PER_PAGE ? 1 : +LearnLastWords + 1;
    nextLevel = +LearnLastWords + 1 > +WORDS_PER_PAGE ? +LearnLastLevel + 1 : +LearnLastLevel;
  }
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
  displayedWordsList.push(word);
  yield put(addToShowedWordsList(displayedWordsList));
  yield put(setLearnWordsStatistic(obj));
}

export default function* addNewWordSagaWatcher() {
  yield takeLatest(NEW_CARD_SHOW, addNewWordSagaWorker);
}
