import { CHANGE_APP_MODE, CHANGE_APP_MODE_LEARN } from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  appMode: 'mainPage',
};

const changeAppModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_MODE:
      return { ...state, appMode: action.payload };
    case CHANGE_APP_MODE_LEARN:
      return { ...state, appMode: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};

export default changeAppModeReducer;
