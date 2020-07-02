import { FETCH_WORDS, SAVE_OLD_WORDS } from './types';

const initialState = {
  wordsFromAPI: [],
  oldWords: [],
};

const getWordsFromAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, wordsFromAPI: action.payload };
    case SAVE_OLD_WORDS:
      return { ...state, oldWords: action.payload };
    default:
      return state;
  }
};

export default getWordsFromAPIReducer;
