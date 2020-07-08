import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { LEARN_WORDS_CHANGE_PAGE, LEARN_WORDS_CHANGE_LEVEL } from '../../ChangeRounds/types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getLearnWordsFromAPI';
import { saveWordToState } from '../../LearnWords/actions';

function* workerGetWords({ payload }) {
  try {
    yield put(showLoader());
    const data = yield call(wordsFetch, payload);
    yield put(saveWordToState(data[0]));
    yield put(hideLoader());
  } catch (e) {
    toast.error('error get words');
    yield put(hideLoader());
  }
}

export default function* watchGetLearnWords() {
  yield takeLatest([LEARN_WORDS_CHANGE_PAGE, LEARN_WORDS_CHANGE_LEVEL], workerGetWords);
}
