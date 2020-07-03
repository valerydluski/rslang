import { call, select, put, takeLatest } from 'redux-saga/effects';
import { GET_AGGREGATED_WORDS } from '../types';
import getAggregatedUserWords from '../../../services/getAggregatedUserWords';
import { updateLearningWords, updateDifficultWords, updateDeletedWords } from '../actions';
import { showDictionaryLoader, hideDictionaryLoader } from '../../Loader/DictionaryLoader/action';

function* aggregatedWordsSagaWorker() {
  const getLoginState = (state) => state.login;
  yield put(showDictionaryLoader());
  const sessionData = yield select(getLoginState);
  const learningWords = yield call(getAggregatedUserWords, sessionData, 'medium');
  const difficultWords = yield call(getAggregatedUserWords, sessionData, 'difficult');
  const deletedWords = yield call(getAggregatedUserWords, sessionData, 'deleted');
  if (learningWords) {
    const [{ paginatedResults }] = learningWords;
    yield put(updateLearningWords(paginatedResults));
  }
  if (difficultWords) {
    const [{ paginatedResults }] = difficultWords;
    yield put(updateDifficultWords(paginatedResults));
  }
  if (deletedWords) {
    const [{ paginatedResults }] = deletedWords;
    yield put(updateDeletedWords(paginatedResults));
  }
  yield put(hideDictionaryLoader());
}

export default function* aggregatedWordsSagaWatcher() {
  yield takeLatest(GET_AGGREGATED_WORDS, aggregatedWordsSagaWorker);
}
