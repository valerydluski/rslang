import {
  NEW_CARD_SHOW,
  SAVE_WORD_TO_STATE,
  CHANGE_LEVEL_CARD,
  CHANGE_PAGE_CARD,
  NEW_CARD_VALUE_SHOWS,
  LOADING_NEW_CARD_HIDE,
  LOADING_NEW_CARD_SHOW,
  SAVE_LEARN_WORDS_COLLECTION,
  LOADER_WORDS_COLLECTION_SHOW,
  LOADER_WORDS_COLLECTION_HIDE,
  IS_WORD_COLLECTION_LOADED,
  ADD_TO_DISPLAYED_WORDS_LIST,
  SHOW_RESULT,
  RESET_STORE_LEARN_WORDS,
  ADD_WORD_TO_SERVER,
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
  loadingWord: false,
};

function newLearnCardShow(state = initialState, action) {
  switch (action.type) {
    case NEW_CARD_SHOW:
      return { ...state, card: action.payload };
    case SAVE_WORD_TO_STATE:
      return { ...state, nextCard: action.payload };
    case CHANGE_LEVEL_CARD:
      return { ...state, level: action.payload };
    case CHANGE_PAGE_CARD:
      return { ...state, page: action.payload };
    case NEW_CARD_VALUE_SHOWS:
      return { ...state, newCardsShow: action.payload };
    case LOADING_NEW_CARD_HIDE:
      return { ...state, loading: action.payload };
    case LOADING_NEW_CARD_SHOW:
      return { ...state, loading: action.payload };
    case SAVE_LEARN_WORDS_COLLECTION:
      return { ...state, wordsCollection: action.payload };
    case LOADER_WORDS_COLLECTION_SHOW:
      return { ...state, loadingWordsCollection: true };
    case LOADER_WORDS_COLLECTION_HIDE:
      return { ...state, loadingWordsCollection: false };
    case IS_WORD_COLLECTION_LOADED:
      return { ...state, isWordsCollectionLoaded: action.payload };
    case ADD_TO_DISPLAYED_WORDS_LIST:
      return { ...state, displayedWordsList: action.payload };
    case SHOW_RESULT:
      return { ...state, showResult: action.payload };
    case ADD_WORD_TO_SERVER:
      return { ...state, loadingWord: action.payload };
    case RESET_STORE:
      return { ...initialState };
    case RESET_STORE_LEARN_WORDS:
      return { ...initialState };
    default:
      return state;
  }
}

export default newLearnCardShow;
