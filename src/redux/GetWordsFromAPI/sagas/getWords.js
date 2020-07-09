import { takeLatest, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchWords } from '../action';
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
  MAKESENTENCE_CHANGE_LEVEL,
  MAKESENTENCE_CHANGE_PAGE,
} from '../../ChangeRounds/types';
import { CHANGE_APP_MODE } from '../../AppMode/types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getWordsFromAPI';
import { configureData } from '../../../services/configureEnglishPuzzleData';
import { updateState, updateSource } from '../../EnglishPuzzle/actions';
import { changeIDontKnowWords } from '../../Games/action';
import getRandomValuesFromArray from '../../../utils/getRandomValuesFromArray';

function* workerGetWords() {
  try {
    yield put(showLoader());
    const state = yield select();
    yield put(changeIDontKnowWords([]));
    const { appMode } = state.changeAppMode;
    const { gameMode } = state.gamesReducer;
    const userWords = state.userWords.words;
    const wordsPerPage = state.userSettings.settings[`${appMode}WordsPerPage`] || 10;
    let payload;
    if (!gameMode && userWords[0] && userWords[0].pagenatedResults.length >= +wordsPerPage) {
      payload = yield put(getRandomValuesFromArray(userWords[0].pagenatedResults, +wordsPerPage));
    } else {
      payload = yield call(wordsFetch, state);
    }
    yield put(fetchWords(payload));
    if (appMode === 'EnglishPuzzle') {
      const { EnglishPuzzleLevel, EnglishPuzzlePage } = state.changeRound;
      const data = yield call(configureData, payload, EnglishPuzzleLevel, EnglishPuzzlePage);
      yield put(updateState(data));
      yield put(updateSource());
    }
    yield put(hideLoader());
  } catch (e) {
    console.log('function*workerGetWords -> e', e);

    toast.error('error get words');
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
      MAKESENTENCE_CHANGE_LEVEL,
      MAKESENTENCE_CHANGE_PAGE,
      CHANGE_APP_MODE,
    ],
    workerGetWords
  );
}
