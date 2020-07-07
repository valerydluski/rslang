import { FETCH_WORDS, SAVE_OLD_WORDS, SAVE_CORRECT_INDEXES } from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  wordsFromAPI: [],
  oldWords: [],
  correctIndexes: [],
};

const getWordsFromAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, wordsFromAPI: action.payload };
    case SAVE_OLD_WORDS:
      return { ...state, oldWords: action.payload };
    case SAVE_CORRECT_INDEXES:
      return { ...state, correctIndexes: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};
export default getWordsFromAPIReducer;
