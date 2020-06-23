import { takeLatest, put, call, select } from 'redux-saga/effects';
import fetchWords from '../action';
import { GAME_CHANGE_LEVEL, GAME_CHANGE_PAGE } from '../../Games/types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getWordsFromAPI';

function* workerGetWords() {
  try {
    const state = yield select();
    yield put(showLoader());
    const payload = yield call(wordsFetch, state);
    yield put(fetchWords(payload));
    yield put(hideLoader());
  } catch (e) {
    console.log(e.message);
    yield put(hideLoader());
  }
}

export default function* watchGetWords() {
  yield takeLatest([GAME_CHANGE_PAGE, GAME_CHANGE_LEVEL], workerGetWords);
}
