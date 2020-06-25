import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
// import roundChangeReducer from './roundChangeReducer';
import englishPuzzleReducer from './EnglishPuzzle/englishPuzzleReducer';
import changeWordsCollectionReducer from './Games/changeWordsCollectionReducer';
import loginReducer from './Auth/Login/reducer';
import userSettingsReducer from './UserSettings/reducer';
import loaderReducer from './Loader/loaderReducer';
import getWordsFromAPIReducer from './GetWordsFromAPI/GetWordsFromAPIReducer';
import gamesReducer from './Games/gamesReducer';
import changeAppModeReducer from './AppMode/AppModeReducer';

const rootReducer = combineReducers({
  gamesReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  englishPuzzle: englishPuzzleReducer,
  login: loginReducer,
  userSettings: userSettingsReducer,
  form: formReducer,
  loader: loaderReducer,
  getWordsFromAPI: getWordsFromAPIReducer,
  changeAppMode: changeAppModeReducer,
});

export default rootReducer;
