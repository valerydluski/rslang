import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';
import saveSessionDataReducer from './Auth/Login/saveSessionDataReducer';

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  saveSessionData: saveSessionDataReducer,
  form: formReducer,
});

export default rootReducer;
