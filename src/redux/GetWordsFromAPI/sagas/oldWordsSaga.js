import { takeLatest, call, put, select } from 'redux-saga/effects';
import { FETCH_OLD_WORDS } from '../types';
import { hideLoaderOldGame, showLoaderOldGame } from '../../Loader/LoadOldWords/action';
import wordsFetch from '../../../services/getOldGamesWords';
import { saveOldWords, saveCorrectIndexes } from '../action';

function* workerStatus(action) {
  yield put(showLoaderOldGame());
  const getGameName = (state) => state.changeAppMode.appMode;
  const gameName = yield select(getGameName);
  const payload = yield call(wordsFetch, action.payload, gameName);
  yield put(saveCorrectIndexes(action.payload.correctAnswers.split(',')));
  yield put(saveOldWords(payload));
  yield put(hideLoaderOldGame());
}

export default function* watchStatus() {
  yield takeLatest(FETCH_OLD_WORDS, workerStatus);
}
