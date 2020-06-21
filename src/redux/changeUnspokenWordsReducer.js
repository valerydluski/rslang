import { CHANGE_UNSPOKEN_WORDS } from './types';

const initialState = {
  unspokenWords: [],
};

const changeUnspokenWordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_UNSPOKEN_WORDS:
      return { ...state, unspokenWords: action.payload };
    default:
      return state;
  }
};

export default changeUnspokenWordsReducer;
