import { takeEvery, call, put } from 'redux-saga/effects';
import REGISTER_TO_SERVER from './types';
import { API } from '../../../config';
import fetchData from '../../../utils/fetchData';
import { authToServer } from '../Login/actions';
import saveUserSettings from '../../UserSettings/actions';

async function signup(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS },
    } = API;
    await fetchData(`${URL}/${USERS}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    console.log('User with this e-mail exists');
  }
  return null;
}

function* workerRegistration(action) {
  const { name, ...userSettings } = action.payload;
  yield call(signup, userSettings);
  yield put(authToServer(userSettings));
  yield put(saveUserSettings(name));
}

export default function* watchRegistration() {
  yield takeEvery(REGISTER_TO_SERVER, workerRegistration);
}
