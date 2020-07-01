import { takeEvery, call, put } from 'redux-saga/effects';
import { RESET_SESSION_DATA } from '../types';
import history from '../../../../utils/history';
import checkHistoryLocation from '../../../../utils/checkHistoryLocation';
import { isDataLoadFromApi } from '../../../LoadDataFromApi/actions';

function* workerLogout() {
  yield put(isDataLoadFromApi(false));
  if (!checkHistoryLocation(['/login', '/registration'])) {
    yield call(history.push, '/login');
  }
}

export default function* watchLogout() {
  yield takeEvery(RESET_SESSION_DATA, workerLogout);
}
