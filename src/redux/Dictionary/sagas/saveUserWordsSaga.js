import { call, select, put, takeLatest } from 'redux-saga/effects';
import { GET_USER_WORDS } from '../types';
import getAllUserWords from '../../../services/getAllUserWords';
import { saveUserWords } from '../actions';

function* saveUserWordsSagaWorker() {
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const payload = yield call(getAllUserWords, sessionData);
  if (payload) {
    yield put(saveUserWords(payload));
  }
}

export default function* saveUserWordsSagaWatcher() {
  yield takeLatest(GET_USER_WORDS, saveUserWordsSagaWorker);
}
