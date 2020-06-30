import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
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
import newLearnCardShow from './LearnWords/reducers/newCardShowReducer';
import saveUserWordsReducer from './Dictionary/reducers/saveUserWordsReducer';
import checkStatusloaderReducer from './Loader/CheckStatusLoader/checkStatusloaderReducer';
import isStatusCheckedReducer from './Auth/Login/isStatusCheckedReducer';

const rootReducer = combineReducers({
  gamesReducer,
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
  userWords: saveUserWordsReducer,
  checkStatusloaderReducer,
  isStatusCheckedReducer,
});

export default rootReducer;
