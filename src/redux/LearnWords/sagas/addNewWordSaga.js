import { takeLatest, select, call } from 'redux-saga/effects';
import { NEW_CARD_SHOW } from '../types';
import saveOneWord from '../../../services/saveOneWord';
import findObjInArray from '../../../utils/findObjInArray';

function* addNewWordSagaWorker(action) {
  const getUserWords = (state) => state.userWords;
  const userWords = yield select(getUserWords);
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const isKnownWord = yield call(findObjInArray, userWords, 'wordId', action.payload.id);
  if (!isKnownWord) {
    const config = {
      difficulty: 'medium',
      optional: {
        time: new Date(),
      },
    };
    yield call(saveOneWord, action.payload.id, config, sessionData);
  }
}

export default function* addNewWordSagaWatcher() {
  yield takeLatest(NEW_CARD_SHOW, addNewWordSagaWorker);
}
