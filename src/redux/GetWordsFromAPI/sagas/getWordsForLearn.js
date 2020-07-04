import { takeLatest, put, call, select, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchWords } from '../action';
import { LEARN_WORDS_CHANGE_PAGE, LEARN_WORDS_CHANGE_LEVEL } from '../../ChangeRounds/types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getWordsFromAPI';
import { configureData } from '../../../services/configureEnglishPuzzleData';
import { updateState, updateSource } from '../../EnglishPuzzle/actions';

function* workerGetWords() {
  try {
    yield put(showLoader());
    yield delay(1000);
    const state = yield select();
    const { appMode } = state.changeAppMode;
    const payload = yield call(wordsFetch, state);
    yield put(fetchWords(payload));
    if (appMode === 'EnglishPuzzle') {
      const { EnglishPuzzleLevel, EnglishPuzzlePage } = state.changeRound;
      const data = yield call(configureData, payload, EnglishPuzzleLevel, EnglishPuzzlePage);
      yield put(updateState(data));
      yield put(updateSource());
    }
    yield put(hideLoader());
  } catch (e) {
    toast.error('error get words');
    yield put(hideLoader());
  }
}

export default function* watchGetWords() {
  yield takeLatest([LEARN_WORDS_CHANGE_PAGE, LEARN_WORDS_CHANGE_LEVEL], workerGetWords);
}
