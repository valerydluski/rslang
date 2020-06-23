import { takeLatest, put, call } from 'redux-saga/effects';
import fetchWords from '../action';
import { GAME_CHANGE_LEVEL, GAME_CHANGE_PAGE } from '../../Games/types';
import { hideLoader, showLoader } from '../../Loader/action';

async function xuita() {
  const response = await fetch(
    'https://afternoon-falls-25894.herokuapp.com/words?group=0&page=0&wordsPerExampleSentenceLTE=10&wordsPerPage=10'
  );
  return await response.json();
}

function* workerGetWords() {
  console.log('тут');
  try {
    yield put(showLoader());
    const payload = yield call(xuita);
    yield put(fetchWords, payload);
    yield put(hideLoader());
  } catch (e) {
    console.log(e.message);
    yield put(hideLoader());
  }
}

export default function* watchGetWords() {
  console.log('defaultfunction*watchGetWords -> watchGetWords');
  yield takeLatest([GAME_CHANGE_LEVEL, GAME_CHANGE_PAGE], workerGetWords);
}
