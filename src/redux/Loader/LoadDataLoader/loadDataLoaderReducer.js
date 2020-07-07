import { SHOW_LOADER_CHECK, HIDE_LOADER_CHECK } from './types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  loading: false,
};

const loadDataLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_CHECK:
      return { ...state, loading: true };
    case RESET_STORE:
      return { ...initialState };
    case HIDE_LOADER_CHECK:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loadDataLoaderReducer;
