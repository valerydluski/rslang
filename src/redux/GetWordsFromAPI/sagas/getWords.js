import { takeLatest, put, call, select } from 'redux-saga/effects';
import fetchWords from '../action';
import { GAME_CHANGE_LEVEL, GAME_CHANGE_PAGE } from '../../Games/types';
import CHANGE_APP_MODE from '../../AppMode/types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getWordsFromAPI';
import { configureData } from '../../../services/configureEnglishPuzzleData';
import { updateState } from '../../EnglishPuzzle/actions';

function* workerGetWords() {
  try {
    const state = yield select();
    const { appMode } = state.changeAppMode;
    yield put(showLoader());
    const payload = yield call(wordsFetch, state);
    yield put(fetchWords(payload));
    if (appMode === 'EnglishPuzzle') {
      const data = yield call(configureData, payload);
      yield put(updateState(data));
    }
    yield put(hideLoader());
  } catch (e) {
    console.log(e.message);
    yield put(hideLoader());
  }
}

export default function* watchGetWords() {
  yield takeLatest([GAME_CHANGE_PAGE, GAME_CHANGE_LEVEL, CHANGE_APP_MODE], workerGetWords);
}
