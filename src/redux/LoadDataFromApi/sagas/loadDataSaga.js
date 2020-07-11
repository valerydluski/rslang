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
import checkInitialStatistic from '../../../utils/checkInitialStatistic';
import checkInitialSettings from '../../../utils/checkInitialSettings';

function* workerLoadData() {
  yield put(loadDataLoaderShow());
  const getLoginState = (state) => state.login;
  const sessionData = yield select(getLoginState);

  const statistic = yield call(getStatisticFromApi, sessionData);
  if (statistic) {
    const statisticFromApi = getSettings(statistic);
    const initialStatistic = checkInitialStatistic(statisticFromApi);
    const now = new Date();
    const { lastUpdateDate } = initialStatistic;
    const last = new Date(lastUpdateDate);
    if (last.getDate() !== now.getDate() && lastUpdateDate !== '0') {
      initialStatistic.countRepeatToday = 0;
      initialStatistic.CountCardsShow = 0;
      initialStatistic.CountNewWordsToday = 0;
      initialStatistic.RepeatWordsToday = '[]';
    }
    const initialRound = createInitialRounds(initialStatistic);
    yield put(changeInitialRound(initialRound));
    yield put(addToShowedWordsList(JSON.parse(initialStatistic.RepeatWordsToday)));
    yield put(saveFullStatisticToStore(initialStatistic));
  }

  const settings = yield call(getSettingsFromApi, sessionData);
  if (settings) {
    const settingsFromApi = getSettings(settings);
    const initialSettings = checkInitialSettings(settingsFromApi);
    yield put(saveUserSettingsToStore(initialSettings));
    yield put(
      puzzleSettingsFromServer({
        isAutoSpeech: initialSettings.isAutoSpeech,
        isTranslation: initialSettings.isTranslation,
        isBackground: initialSettings.isBackground,
      })
    );
    yield put(setLocale(initialSettings.language));
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
