import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';
import loginReducer from './Auth/Login/reducer';
import userSettingsReducer from './UserSettings/reducer';
import changeScoreSpeakITReducer from './SpeakIT/scoreChangeSpeakITReducer';
import changeUnspokenWordsReducer from './changeUnspokenWordsReducer';

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  login: loginReducer,
  userSettings: userSettingsReducer,
  form: formReducer,
  changeScoreSpeakIT: changeScoreSpeakITReducer,
  changeUnspokenWords: changeUnspokenWordsReducer,
});

export default rootReducer;
