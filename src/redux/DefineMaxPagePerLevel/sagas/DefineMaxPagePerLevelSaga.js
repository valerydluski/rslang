import { takeLatest, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  SPEAKIT_CHANGE_LEVEL,
  SPRINT_CHANGE_LEVEL,
  SAVANNAH_CHANGE_LEVEL,
  ENGLISHPUZZLE_CHANGE_LEVEL,
  AUDIOCALL_CHANGE_LEVEL,
  OWNGAME_CHANGE_LEVEL,
} from '../../ChangeRounds/types';
import CHANGE_APP_MODE from '../../AppMode/types';
import maxPage from '../../../services/devineMaxPagePerLevel';
import fetchMaxPage from '../action';
import { hideLoader } from '../../Loader/action';

function* workerDefineMaxPagePerLevel() {
  try {
    const state = yield select();
    const payload = yield call(maxPage, state);
    yield put(fetchMaxPage(payload));
  } catch (e) {
    toast.error('error');
  }
}

export default function* watchMaxPage() {
  yield takeLatest(
    [
      SPEAKIT_CHANGE_LEVEL,
      SPRINT_CHANGE_LEVEL,
      SAVANNAH_CHANGE_LEVEL,
      ENGLISHPUZZLE_CHANGE_LEVEL,
      AUDIOCALL_CHANGE_LEVEL,
      OWNGAME_CHANGE_LEVEL,
      CHANGE_APP_MODE,
    ],
    workerDefineMaxPagePerLevel
  );
}
