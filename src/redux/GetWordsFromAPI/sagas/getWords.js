import { takeLatest, put, call, select } from 'redux-saga/effects';
import fetchWords from '../action';
import {
  SPEAKIT_CHANGE_LEVEL,
  SPEAKIT_CHANGE_PAGE,
  SPRINT_CHANGE_PAGE,
  SPRINT_CHANGE_LEVEL,
  SAVANNAH_CHANGE_PAGE,
  SAVANNAH_CHANGE_LEVEL,
  ENGLISHPUZZLE_CHANGE_LEVEL,
  ENGLISHPUZZLE_CHANGE_PAGE,
  AUDIOCALL_CHANGE_LEVEL,
  AUDIOCALL_CHANGE_PAGE,
  OWNGAME_CHANGE_LEVEL,
  OWNGAME_CHANGE_PAGE,
} from '../../ChangeRounds/types';
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
  yield takeLatest(
    [
      SPEAKIT_CHANGE_LEVEL,
      SPEAKIT_CHANGE_PAGE,
      SPRINT_CHANGE_PAGE,
      SPRINT_CHANGE_LEVEL,
      SAVANNAH_CHANGE_PAGE,
      SAVANNAH_CHANGE_LEVEL,
      ENGLISHPUZZLE_CHANGE_LEVEL,
      ENGLISHPUZZLE_CHANGE_PAGE,
      AUDIOCALL_CHANGE_LEVEL,
      AUDIOCALL_CHANGE_PAGE,
      OWNGAME_CHANGE_LEVEL,
      OWNGAME_CHANGE_PAGE,
      CHANGE_APP_MODE,
    ],
    workerGetWords
  );
}
