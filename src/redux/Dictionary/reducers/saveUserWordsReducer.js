import { SAVE_USER_WORDS, LOADING_USER_WORDS } from '../types';

const initialState = {
  words: [],
  loading: false,
};

function saveUserWordsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_WORDS:
      return { ...state, words: action.payload };
    case LOADING_USER_WORDS:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default saveUserWordsReducer;
