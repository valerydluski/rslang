import { SAVE_SESSION_DATA } from '../types';

const initialState = {
  userId: JSON.parse(localStorage.getItem('userId')) || '',
  token: JSON.parse(localStorage.getItem('userToken')) || '',
};

function saveSessionDataReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SESSION_DATA:
      localStorage.setItem('userId', JSON.stringify(action.payload.userId));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return { ...state, userId: action.payload.userId, token: action.payload.token };
    default:
      return state;
  }
}

export default saveSessionDataReducer;
