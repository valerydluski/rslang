import { CHANGE_I_DONT_KNOW_WORDS } from './types';

const initialState = {
  IDontKnowWords: [],
};

const changeIDontKnowWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_I_DONT_KNOW_WORDS:
      return { ...state, IDontKnowWords: action.payload };
    default:
      return state;
  }
};

export default changeIDontKnowWordsReducer;
