import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  form: formReducer,
});

export default rootReducer;
