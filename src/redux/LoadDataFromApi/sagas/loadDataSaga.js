import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setLocale } from 'react-redux-i18n';
import { LOAD_DATA_FROM_API } from '../types';
import { isDataLoadFromApi } from '../actions';
import { saveFullStatisticToStore } from '../../Statistic/action';
import getSettings from '../../../utils/getSettings';
import getStatisticFromApi from '../../../services/getStatisticFromApi';
import getSettingsFromApi from '../../../services/getSettingsFromApi';
import { saveUserSettingsToStore } from '../../UserSettings/actions';
import { loadDataLoaderShow, loadDataLoaderHide } from '../../Loader/LoadDataLoader/action';
import createInitialRounds from '../../../utils/createInitialRounds';
import { changeInitialRound } from '../../ChangeRounds/action';
import { addToShowedWordsList } from '../../LearnWords/actions';
import { puzzleSettingsFromServer } from '../../EnglishPuzzle/actions';
import getAllUserWords from '../../../services/getAllUserWords';
import { saveUserWords } from '../../Dictionary/actions';

function* workerLoadData() {
  yield put(loadDataLoaderShow());
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);

  const statistic = yield call(getStatisticFromApi, sessionData);
  if (statistic) {
    console.log('function*workerLoadData -> statistic', statistic);
    const now = new Date();
    // const { lastUpdateDate } = statistic;
    const statisticFromApi = getSettings(statistic);
    const initialRound = createInitialRounds(statisticFromApi);
    yield put(changeInitialRound(initialRound));
    yield put(addToShowedWordsList(JSON.parse(statisticFromApi.RepeatWordsToday)));
    yield put(saveFullStatisticToStore(statisticFromApi));
  }

  const settings = yield call(getSettingsFromApi, sessionData);
  if (settings) {
    const settingsFromApi = getSettings(settings);
    yield put(saveUserSettingsToStore(settingsFromApi));
    yield put(
      puzzleSettingsFromServer({
        isAutoSpeech: settingsFromApi.isAutoSpeech,
        isTranslation: settingsFromApi.isTranslation,
        isBackground: settingsFromApi.isBackground,
      })
    );
    yield put(setLocale(settingsFromApi.language));
  }

  const payload = yield call(getAllUserWords, sessionData);
  if (payload) {
    yield put(saveUserWords(payload));
  }

  yield put(isDataLoadFromApi(true));
  yield put(loadDataLoaderHide());
}

export default function* watchLoadData() {
  yield takeEvery(LOAD_DATA_FROM_API, workerLoadData);
}
