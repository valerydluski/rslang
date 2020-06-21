import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';
import changeScoreSpeakITReducer from './SpeakIT/scoreChangeSpeakITReducer';
import changeUnspokenWordsReducer from './changeUnspokenWordsReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  changeScoreSpeakIT: changeScoreSpeakITReducer,
  changeUnspokenWords: changeUnspokenWordsReducer,
});

export default rootReducer;
