import { CORRECT_CARD } from '../types';

const initialState = {
  isCorrect: false,
};

function isCorrectReducer(state = initialState, action) {
  switch (action.type) {
    case CORRECT_CARD:
      return { ...state, isCorrect: action.payload };
    default:
      return state;
  }
}

export default isCorrectReducer;
