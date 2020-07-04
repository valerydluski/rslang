import {
  NEW_CARD_SHOW,
  SAVE_WORD_TO_STATE,
  CHANGE_LEVEL_CARD,
  CHANGE_PAGE_CARD,
  NEW_CARD_VALUE_SHOWS,
  LOADING_NEW_CARD_HIDE,
  LOADING_NEW_CARD_SHOW,
} from '../types';

const initialState = {
  card: null,
  nextCard: null,
  level: 1,
  page: 1,
  newCardsShow: 0,
  loading: false,
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
    default:
      return state;
  }
}

export default newLearnCardShow;
