import { select, takeLatest, put, call } from 'redux-saga/effects';
import { NEXT_NEW_CARD } from '../types';
import nextWord from '../../../utils/nextWord';
import { changeLearnWordsPage } from '../../ChangeRounds/action';
import { changeLevelCard, changePageCard, loadNewWordShow, loadNewWordHide } from '../actions';

function* nextNewCardShowWorker() {
  yield put(loadNewWordShow());
  const getNewCardInfo = (state) => state.newLearnCardShow;
  const cardInfo = yield select(getNewCardInfo);
  const nextCardInfo = yield call(nextWord, cardInfo.level, cardInfo.page);
  yield put(changeLearnWordsPage(nextCardInfo));
  yield put(changeLevelCard(nextCardInfo.level));
  yield put(changePageCard(nextCardInfo.page));
  yield put(loadNewWordHide());
}

export default function* nextNewCardShowWatcher() {
  yield takeLatest(NEXT_NEW_CARD, nextNewCardShowWorker);
}
