import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import roundChangeReducer from './Games/roundChangeReducer';
import changeWordsCollectionReducer from './Games/changeWordsCollectionReducer';
import loginReducer from './Auth/Login/reducer';
import userSettingsReducer from './UserSettings/reducer';
import changeScoreSpeakITReducer from './SpeakIT/scoreChangeSpeakITReducer';
import changeIDontKnowWordsReducer from './Games/changeIDontKnowReducer';
import loaderReducer from './Loader/loaderReducer';

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  login: loginReducer,
  userSettings: userSettingsReducer,
  form: formReducer,
  changeScoreSpeakIT: changeScoreSpeakITReducer,
  changeIDontKnowWords: changeIDontKnowWordsReducer,
  loader: loaderReducer,
});

export default rootReducer;
