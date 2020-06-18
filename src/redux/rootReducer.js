import roundChangeReducer from './roundChangeReducer';
import changeWordsCollectionReducer from './changeWordsCollectionReducer';
import switchGameModeReducer from './switchGameModeReducer';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  roundChange: roundChangeReducer,
  changeWordsCollection: changeWordsCollectionReducer,
  switchGameMode: switchGameModeReducer,
});

export default rootReducer;
