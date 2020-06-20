import { SAVE_SESSION_DATA, RESET_SESSION_DATA } from './types';

const initialState = {
  isLogin: false,
  userId: JSON.parse(localStorage.getItem('userId')) || '',
  token: JSON.parse(localStorage.getItem('token')) || '',
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SESSION_DATA:
      localStorage.setItem('userId', JSON.stringify(action.payload.userId));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        isLogin: action.payload.isLogin,
      };
    case RESET_SESSION_DATA:
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
}

export default loginReducer;
