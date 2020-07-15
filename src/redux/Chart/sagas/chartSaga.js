import { call, select, put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_WORDS } from '../types';
import getAggregatedUserWords from '../../../services/getAggregatedUserWords';
import { updateChartData } from '../actions';
import { showDictionaryLoader, hideDictionaryLoader } from '../../Loader/DictionaryLoader/action';
import configureChartData from '../../../utils/configureChartData';

function* chartSagaWorker() {
  const getLoginState = (state) => state.login;
  yield put(showDictionaryLoader());
  const sessionData = yield select(getLoginState);
  const allWords = yield call(getAggregatedUserWords, sessionData, 'all');
  if (allWords) {
    const [{ paginatedResults }] = allWords;
    if (paginatedResults.length !== 0) {
      const chartData = configureChartData(
        paginatedResults.map((item) => item.userWord.optional.addDate)
      );
      yield put(updateChartData(chartData));
    }
  }
  yield put(hideDictionaryLoader());
}

export default function* chartSagaWatcher() {
  yield takeLatest(GET_ALL_WORDS, chartSagaWorker);
}
