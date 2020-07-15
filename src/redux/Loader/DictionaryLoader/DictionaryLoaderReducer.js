import { SHOW_LOADER_DICTIONARY, HIDE_LOADER_DICTIONARY } from './types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  loading: false,
};

const dictionaryLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_DICTIONARY:
      return { ...state, loading: true };
    case RESET_STORE:
      return { ...initialState };
    case HIDE_LOADER_DICTIONARY:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default dictionaryLoaderReducer;
