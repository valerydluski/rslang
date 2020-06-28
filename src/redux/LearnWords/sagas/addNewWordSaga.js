import { takeLatest, select, call } from 'redux-saga/effects';
import { NEW_CARD_SHOW } from '../types';
import saveOneWord from '../../../services/saveOneWord';

function* addNewWordSagaWorker(action) {
  console.log('function*addNewWordSagaWorker -> action', action.payload.id);
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);
  const config = {
    difficulty: 'medium',
    optional: {
      time: new Date(),
    },
  };
  yield call(saveOneWord, action.payload.id, config, sessionData);
}

export default function* addNewWordSagaWatcher() {
  yield takeLatest(NEW_CARD_SHOW, addNewWordSagaWorker);
}
