import CHANGE_APP_MODE from './types';

const initialState = {
  appMode: 'mainPage',
};

const changeAppModeReducer = (state = initialState, action) => {
  console.log('changeAppModeReducer -> action', action);
  switch (action.type) {
    case CHANGE_APP_MODE:
      return { ...state, appMode: action.payload };
    default:
      return state;
  }
};

export default changeAppModeReducer;
