import { SHOW_LOADER_OLD_GAME, HIDE_LOADER_OLD_GAME } from './types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  loadingOldGame: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_OLD_GAME:
      return { ...state, loadingOldGame: true };
    case HIDE_LOADER_OLD_GAME:
      return { ...state, loadingOldGame: false };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};

export default loaderReducer;
