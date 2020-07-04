import { takeLatest, select, call } from 'redux-saga/effects';
import { NEW_CARD_SHOW } from '../types';
import saveOneWord from '../../../services/saveOneWord';
import findObjInArray from '../../../utils/findObjInArray';

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
  }
}

export default function* addNewWordSagaWatcher() {
  yield takeLatest(NEW_CARD_SHOW, addNewWordSagaWorker);
}
