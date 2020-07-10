import {
  NEW_CARD_SHOW,
  SAVE_WORD_TO_STATE,
  NEW_CARD_VALUE_SHOWS,
  ADD_TO_DISPLAYED_WORDS_LIST,
  SHOW_RESULT,
  RESET_STORE_REPEAT_WORDS,
} from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  card: null,
  nextCard: null,
  level: 1,
  page: 1,
  newCardsShow: 0,
  loading: false,
  wordsCollection: [],
  loadingWordsCollection: false,
  isWordsCollectionLoaded: false,
  displayedWordsList: [],
  showResult: false,
};

function repeatWords(state = initialState, action) {
  switch (action.type) {
    case NEW_CARD_SHOW:
      return { ...state, card: action.payload };
    case SAVE_WORD_TO_STATE:
      return { ...state, nextCard: action.payload };
    case NEW_CARD_VALUE_SHOWS:
      return { ...state, newCardsShow: action.payload };
    case ADD_TO_DISPLAYED_WORDS_LIST:
      return { ...state, displayedWordsList: action.payload };
    case SHOW_RESULT:
      return { ...state, showResult: action.payload };
    case RESET_STORE:
      return { ...initialState };
    case RESET_STORE_REPEAT_WORDS:
      return { ...initialState };
    default:
      return state;
  }
}

export default repeatWords;
