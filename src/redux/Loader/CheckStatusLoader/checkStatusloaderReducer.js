import { SHOW_LOADER_CHECK, HIDE_LOADER_CHECK } from './types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  loading: false,
};

const checkStatusloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_CHECK:
      return { ...state, loading: true };
    case HIDE_LOADER_CHECK:
      return { ...state, loading: false };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};

export default checkStatusloaderReducer;
