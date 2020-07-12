import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import englishPuzzleReducer from './EnglishPuzzle/englishPuzzleReducer';
import loginReducer from './Auth/Login/reducer';
import userSettingsReducer from './UserSettings/reducer';
import loaderReducer from './Loader/loaderReducer';
import getWordsFromAPIReducer from './GetWordsFromAPI/GetWordsFromAPIReducer';
import gamesReducer from './Games/gamesReducer';
import changeAppModeReducer from './AppMode/AppModeReducer';
import changeRoundReducer from './ChangeRounds/changeRoundReducer';
import DefineMaxPagePerLevelReducer from './DefineMaxPagePerLevel/DefineMaxPagePerLevelReducer';
import changeStatisticReducer from './Statistic/statisticReducer';
import isCorrectReducer from './LearnWords/reducers/correctReducer';
import newLearnCardShow from './LearnWords/reducer';
import saveUserWordsReducer from './Dictionary/reducers/saveUserWordsReducer';
import aggregatedWordsReducer from './Dictionary/reducers/aggregatedWordsReducer';
import checkStatusloaderReducer from './Loader/CheckStatusLoader/checkStatusloaderReducer';
import isStatusCheckedReducer from './Auth/Login/isStatusCheckedReducer';
import loadDataFromApiReducer from './LoadDataFromApi/reducer';
import loadDataLoaderReducer from './Loader/LoadDataLoader/loadDataLoaderReducer';
import loadOldGameWords from './Loader/LoadOldWords/loaderReducer';
import dictionaryLoaderReducer from './Loader/DictionaryLoader/DictionaryLoaderReducer';
import repeatWords from './RepeatWords/reducer';
import isCorrectRepeatReducer from './RepeatWords/reducers/correctReducer';
import chartReducer from './Chart/chartReducer';

const rootReducer = combineReducers({
  gamesReducer,
  i18n: i18nReducer,
  englishPuzzle: englishPuzzleReducer,
  login: loginReducer,
  userSettings: userSettingsReducer,
  form: formReducer,
  loader: loaderReducer,
  getWordsFromAPI: getWordsFromAPIReducer,
  changeAppMode: changeAppModeReducer,
  changeRound: changeRoundReducer,
  maxPage: DefineMaxPagePerLevelReducer,
  changeStatistic: changeStatisticReducer,
  correctLearnCard: isCorrectReducer,
  newLearnCardShow,
  dictionary: aggregatedWordsReducer,
  userWords: saveUserWordsReducer,
  checkStatusloaderReducer,
  isStatusCheckedReducer,
  dictionaryLoaderReducer,
  dataLoad: loadDataFromApiReducer,
  loadDataLoaderReducer,
  loadOldGameWords,
  repeatWords,
  isCorrectRepeatReducer,
  chartReducer,
});

export default rootReducer;
