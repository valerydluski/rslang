import SAVE_USER_SETTINGS from './types';

const initialState = {
  name: '',
};

function userSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_SETTINGS:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

export default userSettingsReducer;
