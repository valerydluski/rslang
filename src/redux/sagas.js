import { all, fork } from 'redux-saga/effects';
import watchLogin from './Auth/Login/sagas/login';
import watchRegistration from './Auth/Registration/sagas';
import watchStatus from './Auth/Login/sagas/watchLoginStatus';
import watchGetWords from './GetWordsFromAPI/sagas/getWords';
import watchLogout from './Auth/Login/sagas/logout';
import watchMaxPage from './DefineMaxPagePerLevel/sagas/DefineMaxPagePerLevelSaga';
import correctWatcher from './LearnWords/sagas/correctSaga';
import addNewWordSagaWatcher from './LearnWords/sagas/addNewWordSaga';

export default function* watchSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegistration),
    fork(watchStatus),
    fork(watchGetWords),
    fork(watchLogout),
    fork(watchMaxPage),
    fork(correctWatcher),
    fork(addNewWordSagaWatcher),
  ]);
}
