import { CORRECT_CARD } from '../types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  isCorrect: false,
  isTranslationShow: false,
};

function isCorrectReducer(state = initialState, action) {
  switch (action.type) {
    case CORRECT_CARD:
      return { ...state, isCorrect: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
}

export default isCorrectReducer;
