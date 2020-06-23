import { GAME_CHANGE_SCORE } from './types';

const initialState = {
  gameScore: 0,
};

const scoreChangeGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_CHANGE_SCORE:
      return { ...state, gameScore: action.payload };
    default:
      return state;
  }
};

export default scoreChangeGameReducer;
