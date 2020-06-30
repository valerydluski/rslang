import { takeLatest, select, put, call } from 'redux-saga/effects';
import { CHECK_SESSION_STATUS } from '../types';
import { resetSessionData, isAlreadyCheckStatusSession } from '../actions';
import checkToken from '../../../../services/checkToken';
import history from '../../../../utils/history';
import checkHistoryLocation from '../../../../utils/checkHistoryLocation';
import getSettings from '../../../../utils/getSettings';
import { saveUserName } from '../../../UserSettings/actions';
import { getUserWords } from '../../../Dictionary/actions';
import {
  checkStatusShowLoader,
  checkStatusHideLoader,
} from '../../../Loader/CheckStatusLoader/action';

function* workerStatus() {
  yield put(checkStatusShowLoader());
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const data = yield call(checkToken, sessionData);
  if (!data) {
    yield put(resetSessionData());
    if (!checkHistoryLocation(['/login', '/registration'])) {
      yield call(history.push, '/login');
    }
  } else {
    yield put(getUserWords());
    const settingsFromApi = getSettings(data);
    yield put(saveUserName(settingsFromApi));
  }
  yield put(isAlreadyCheckStatusSession());
  yield put(checkStatusHideLoader());
}

export default function* watchStatus() {
  yield takeLatest(CHECK_SESSION_STATUS, workerStatus);
}
