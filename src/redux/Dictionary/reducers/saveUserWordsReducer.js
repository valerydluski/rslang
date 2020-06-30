import { SAVE_USER_WORDS } from '../types';

const initialState = {
  words: [],
};

function saveUserWordsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_WORDS:
      return { ...state, words: action.payload };
    default:
      return state;
  }
}

export default saveUserWordsReducer;
