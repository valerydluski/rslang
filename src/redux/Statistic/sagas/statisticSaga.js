import { takeLatest, select, call } from 'redux-saga/effects';
import {
  // SPEAKIT_LAST_ROUND,
  // ENGLISHPUZZLE_LAST_ROUND,
  // SAVANNAH_ROUND,
  // AUDIOCALL_LAST_ROUND,
  // SPRINT_LAST_ROUND,
  // OWNGAME_LAST_ROUND,
  // SPEAKIT_PASSED_ROUND,
  // ENGLISHPUZZLE_PASSED_ROUND,
  // SAVANNAH_PASSED_ROUND,
  // AUDIOCALL_PASSED_ROUND,
  // SPRINT_PASSED_ROUND,
  // OWNGAME_PASSED_ROUND,
  // LEARN_LAST_WORDS,
  // LEARN_LAST_LEVEL,
  SAVE_FULL_STATISTIC,
} from '../types';
import putStatisticToApi from '../../../services/putStatisticToApi';
import createStatisticJSON from '../../../utils/createStatisticJSON';

function* workerStatus() {
  const getStatistic = (state) => state.changeStatistic;
  const getLoginState = (state) => state.login;
  const statistic = yield select(getStatistic);
  const userData = yield select(getLoginState);
  const sessionData = yield createStatisticJSON(statistic);
  yield call(putStatisticToApi, sessionData, userData);
}

export default function* watchStatus() {
  yield takeLatest(
    [
      // SPEAKIT_LAST_ROUND,
      // ENGLISHPUZZLE_LAST_ROUND,
      // SAVANNAH_ROUND,
      // AUDIOCALL_LAST_ROUND,
      // SPRINT_LAST_ROUND,
      // OWNGAME_LAST_ROUND,
      // SPEAKIT_PASSED_ROUND,
      // ENGLISHPUZZLE_PASSED_ROUND,
      // SAVANNAH_PASSED_ROUND,
      // AUDIOCALL_PASSED_ROUND,
      // SPRINT_PASSED_ROUND,
      // OWNGAME_PASSED_ROUND,
      // LEARN_LAST_WORDS,
      // LEARN_LAST_LEVEL,
      SAVE_FULL_STATISTIC,
    ],
    workerStatus
  );
}
