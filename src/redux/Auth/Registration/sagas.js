import { takeEvery, call } from 'redux-saga/effects';
import REGISTER_TO_SERVER from './types';
import { API } from '../../../config';

async function signup(user) {
  try {
    const { name, ...userSettings } = user;
    console.log('signup -> userSettings', userSettings);
    const {
      URL,
      ENDPOINTS: { USERS },
    } = API;
    const response = await fetch(`${URL}/${USERS}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userSettings),
    });
    const data = await response.json();
    console.log('signin -> data', data);
  } catch (e) {
    console.log(e);
  }
  return null;
}

function* workerRegistration(action) {
  const payload = yield call(signup, action.payload);
  console.log('function*workerSubmit -> payload', payload);
}

export default function* watchRegistration() {
  yield takeEvery(REGISTER_TO_SERVER, workerRegistration);
}
