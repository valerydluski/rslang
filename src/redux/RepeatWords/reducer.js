import {
  NEW_CARD_SHOW,
  SAVE_WORD_TO_STATE,
  SHOW_RESULT,
  RESET_STORE_REPEAT_WORDS,
  GET_REPEAT_WORDS_LOADER_SHOW,
  GET_REPEAT_WORDS_LOADER_HIDE,
  SAVE_REPEAT_WORDS,
  IS_WORD_COLLECTION_LOADED,
  IS_REPEAT_WORDS_LOADED,
} from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  card: null,
  nextCard: null,
  loading: false,
  wordsCollection: [],
  isWordsCollectionLoaded: false,
  showResult: false,
  isRepeatWordsLoaded: false,
};

function repeatWords(state = initialState, action) {
  switch (action.type) {
    case NEW_CARD_SHOW:
      return { ...state, card: action.payload };
    case SAVE_WORD_TO_STATE:
      return { ...state, nextCard: action.payload };
    case SHOW_RESULT:
      return { ...state, showResult: action.payload };
    case SAVE_REPEAT_WORDS:
      return { ...state, wordsCollection: action.payload };
    case GET_REPEAT_WORDS_LOADER_SHOW:
      return { ...state, loading: true };
    case GET_REPEAT_WORDS_LOADER_HIDE:
      return { ...state, loading: false };
    case IS_WORD_COLLECTION_LOADED:
      return { ...state, isWordsCollectionLoaded: action.payload };
    case IS_REPEAT_WORDS_LOADED:
      return { ...state, isRepeatWordsLoaded: true };
    case RESET_STORE:
      return { ...initialState };
    case RESET_STORE_REPEAT_WORDS:
      return { ...initialState };
    default:
      return state;
  }
}

export default repeatWords;
