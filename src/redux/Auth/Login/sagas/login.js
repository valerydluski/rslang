import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTH_TO_SERVER } from '../types';
import { API } from '../../../../config';
import { saveSessionData } from '../actions';
import fetchData from '../../../../utils/fetchData';

async function signin(user) {
  try {
    const {
      URL,
      ENDPOINTS: { SIGNIN },
    } = API;
    return await fetchData(`${URL}/${SIGNIN}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    console.log('Incorrect login or password');
  }
  return null;
}

function* workerLogin(action) {
  const payload = yield call(signin, action.payload);
  if (payload) {
    payload.isLogin = true;
    yield put(saveSessionData(payload));
  }
}

export default function* watchLogin() {
  yield takeEvery(AUTH_TO_SERVER, workerLogin);
}
