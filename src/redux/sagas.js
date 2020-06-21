import { all, fork } from 'redux-saga/effects';
import watchLogin from './Auth/Login/sagas/login';
import watchRegistration from './Auth/Registration/sagas';
import watchStatus from './Auth/Login/sagas/watchLoginStatus';

export default function* watchSaga() {
  yield all([fork(watchLogin), fork(watchRegistration), fork(watchStatus)]);
}
