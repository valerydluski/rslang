import { START_GAME, FINISH_GAME } from './types';

const initialState = {
  isGameStart: false,
};

const switchGameModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, isGameStart: true };
    case FINISH_GAME:
      return { ...state, isGameStart: false };
    default:
      return state;
  }
};

export default switchGameModeReducer;
