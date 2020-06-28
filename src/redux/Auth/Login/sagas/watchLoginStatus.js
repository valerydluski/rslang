import { takeLatest, select, put, call } from 'redux-saga/effects';
import { CHECK_SESSION_STATUS } from '../types';
import { resetSessionData } from '../actions';
import checkToken from '../../../../services/checkToken';
import history from '../../../../utils/history';
import checkHistoryLocation from '../../../../utils/checkHistoryLocation';
import getSettings from '../../../../utils/getSettings';
import { saveUserName } from '../../../UserSettings/actions';
import { getUserWords } from '../../../Dictionary/actions';

function* workerStatus() {
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const data = yield call(checkToken, sessionData);
  if (!data) {
    yield put(resetSessionData());
    if (!checkHistoryLocation(['/login', '/registration'])) {
      yield call(history.push, '/login');
    }
  } else {
    const settingsFromApi = getSettings(data);
    yield put(saveUserName(settingsFromApi));
    yield put(getUserWords());
  }
}

export default function* watchStatus() {
  yield takeLatest(CHECK_SESSION_STATUS, workerStatus);
}
