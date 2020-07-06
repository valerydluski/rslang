import { SHOW_LOADER_DICTIONARY, HIDE_LOADER_DICTIONARY } from './types';

const initialState = {
  loading: false,
};

const dictionaryLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_DICTIONARY:
      return { ...state, loading: true };
    case HIDE_LOADER_DICTIONARY:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default dictionaryLoaderReducer;
