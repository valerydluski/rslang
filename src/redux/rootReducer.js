import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';
import changeScoreSpeakITReducer from './SpeakIT/scoreChangeSpeakITReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  changeScoreSpeakIT: changeScoreSpeakITReducer,
});

export default rootReducer;
