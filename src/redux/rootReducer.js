import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';
import englishPuzzleReducer from './englishPuzzleReducer'

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  englishPuzzle: englishPuzzleReducer
});

export default rootReducer;
