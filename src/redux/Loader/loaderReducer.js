import { SHOW_LOADER, HIDE_LOADER, SHOW_LOADER_OLD_GAME, HIDE_LOADER_OLD_GAME } from './types';

const initialState = {
  loading: false,
  loadingOldGame: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_LOADER_OLD_GAME:
      return { ...state, loading: true };
    case HIDE_LOADER_OLD_GAME:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default loaderReducer;
