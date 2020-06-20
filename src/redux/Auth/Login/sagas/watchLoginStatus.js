import { takeLatest, select, put, call } from 'redux-saga/effects';
import { CHECK_SESSION_STATUS } from '../types';
import { resetSessionData } from '../actions';
import fetchData from '../../../../utils/fetchData';
import { API } from '../../../../config';

async function checkToken(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, WORDS },
    } = API;

    await fetchData(`${URL}/${USERS}/${user.userId}/${WORDS}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: 'application/json',
      },
    });
  } catch (e) {
    throw new Error(e.message);
  }
}

function* workerStatus() {
  try {
    const getLoginState = (state) => state.login;
    const sessionData = yield select(getLoginState);
    yield call(checkToken, sessionData);
    sessionData.isLogin = true;
    put(sessionData(sessionData));
  } catch (e) {
    put(resetSessionData());
  }
}

export default function* watchStatus() {
  yield takeLatest(CHECK_SESSION_STATUS, workerStatus);
}
