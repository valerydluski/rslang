import { takeEvery, call, put, select } from 'redux-saga/effects';
import { LOAD_DATA_FROM_API } from '../types';
import { isDataLoadFromApi } from '../actions';
import { saveFullStatisticToStore } from '../../Statistic/action';
import getSettings from '../../../utils/getSettings';
import getStatisticFromApi from '../../../services/getStatisticFromApi';
import getSettingsFromApi from '../../../services/getSettingsFromApi';
import { getUserWords } from '../../Dictionary/actions';
import { saveUserSettingsToStore } from '../../UserSettings/actions';
import { loadDataLoaderShow, loadDataLoaderHide } from '../../Loader/LoadDataLoader/action';
import createInitialRounds from '../../../utils/createInitialRounds';
import { changeInitialRound } from '../../ChangeRounds/action';
import { addToShowedWordsList } from '../../LearnWords/actions';
import { puzzleSettingsFromServer } from '../../EnglishPuzzle/actions';

function* workerLoadData() {
  yield put(loadDataLoaderShow());
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);

  const statistic = yield call(getStatisticFromApi, sessionData);
  if (statistic) {
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
  }

  yield put(getUserWords());

  yield put(isDataLoadFromApi(true));
  yield put(loadDataLoaderHide());
}

export default function* watchLoadData() {
  yield takeEvery(LOAD_DATA_FROM_API, workerLoadData);
}
