import { SAVE_USER_WORDS, LOADING_USER_WORDS } from '../types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  words: [{ paginatedResults: [] }],
  loading: false,
};

function saveUserWordsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_WORDS:
      return { ...state, words: action.payload };
    case LOADING_USER_WORDS:
      return { ...state, loading: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
}

export default saveUserWordsReducer;
