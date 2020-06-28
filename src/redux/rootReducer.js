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
import isCorrectReducer from './LearnWords/reducers/correctReducer';
import newLearnCardShow from './LearnWords/reducers/newCardShowReducer';

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
  correctLearnCard: isCorrectReducer,
  newLearnCardShow,
});

export default rootReducer;
