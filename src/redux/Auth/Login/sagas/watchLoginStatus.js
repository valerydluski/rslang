import { takeLatest, select, put, call } from 'redux-saga/effects';
import { CHECK_SESSION_STATUS } from '../types';
import { resetSessionData, isAlreadyCheckStatusSession } from '../actions';
import checkToken from '../../../../services/checkToken';
import history from '../../../../utils/history';
import checkHistoryLocation from '../../../../utils/checkHistoryLocation';
import {
  checkStatusShowLoader,
  checkStatusHideLoader,
} from '../../../Loader/CheckStatusLoader/action';
import { loadDataFromApi } from '../../../LoadDataFromApi/actions';

function* workerStatus() {
  yield put(checkStatusShowLoader());
  const getLoginState = (state) => state.login;
  const getLoadDataStatus = (state) => state.dataLoad.isDataLoadFromApi;
  const sessionData = yield select(getLoginState);
  const isDataLoad = yield select(getLoadDataStatus);
  let data = '';
  if (sessionData.token) data = yield call(checkToken, sessionData);
  if (!data) {
    yield put(resetSessionData());
    if (!checkHistoryLocation(['/login', '/registration'])) {
      yield call(history.push, '/login');
    }
  } else if (!isDataLoad) {
    yield put(loadDataFromApi());
    yield put(isAlreadyCheckStatusSession());
  }
  yield put(checkStatusHideLoader());
}

export default function* watchStatus() {
  yield takeLatest(CHECK_SESSION_STATUS, workerStatus);
}
