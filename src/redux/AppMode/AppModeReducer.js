import { CHANGE_APP_MODE, CHANGE_APP_MODE_LEARN } from './types';

const initialState = {
  appMode: 'mainPage',
};

const changeAppModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_MODE:
      return { ...state, appMode: action.payload };
    case CHANGE_APP_MODE_LEARN:
      return { ...state, appMode: action.payload };
    default:
      return state;
  }
};

export default changeAppModeReducer;
