import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTH_TO_SERVER } from './types';
import { API } from '../../../config';
import { saveSessionData } from './actions';

async function signin(user) {
  try {
    const {
      URL,
      ENDPOINTS: { SIGNIN },
    } = API;
    const response = await fetch(`${URL}/${SIGNIN}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
  return null;
}

function* workerLogin(action) {
  const payload = yield call(signin, action.payload);
  yield put(saveSessionData(payload));
}

export default function* watchLogin() {
  yield takeEvery(AUTH_TO_SERVER, workerLogin);
}
