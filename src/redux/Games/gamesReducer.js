import {
  GAME_CHANGE_LEVEL,
  GAME_CHANGE_PAGE,
  CHANGE_I_DONT_KNOW_WORDS,
  GAME_CHANGE_SCORE,
} from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  gameLevel: '1',
  gamePage: '1',
  IDontKnowWords: [],
  gameScore: 0,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_CHANGE_LEVEL:
      return { ...state, gameLevel: action.payload };
    case GAME_CHANGE_PAGE:
      return { ...state, gamePage: action.payload };
    case CHANGE_I_DONT_KNOW_WORDS:
      return { ...state, IDontKnowWords: action.payload };
    case GAME_CHANGE_SCORE:
      return { ...state, gameScore: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};
export default gamesReducer;
