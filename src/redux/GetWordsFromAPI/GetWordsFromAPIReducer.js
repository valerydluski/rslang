import { FETCH_WORDS } from './types';

const initialState = {
  wordsFromAPI: [],
};

const getWordsFromAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORDS:
      return { ...state, wordsFromAPI: action.payload };
    default:
      return state;
  }
};

export default getWordsFromAPIReducer;
