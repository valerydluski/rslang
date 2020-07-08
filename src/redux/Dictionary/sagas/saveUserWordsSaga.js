import { call, select, put, takeLatest } from 'redux-saga/effects';
import { GET_USER_WORDS } from '../types';
import getAllUserWords from '../../../services/getAllUserWords';
import { saveUserWords, loadUserWords } from '../actions';

function* saveUserWordsSagaWorker() {
  yield put(loadUserWords(true));
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const payload = yield call(getAllUserWords, sessionData);
  if (payload) {
    yield put(saveUserWords(payload));
  }
  yield put(loadUserWords(false));
}

export default function* saveUserWordsSagaWatcher() {
  yield takeLatest(GET_USER_WORDS, saveUserWordsSagaWorker);
}
