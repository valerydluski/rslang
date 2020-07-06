import { UPDATE_LEARNING_WORDS, UPDATE_DIFFICULT_WORDS, UPDATE_DELETED_WORDS } from '../types';

const initialState = {
  learningWords: [],
  difficultWords: [],
  deletedWords: [],
};

function aggregatedWordsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LEARNING_WORDS:
      return { ...state, learningWords: action.payload };
    case UPDATE_DIFFICULT_WORDS:
      return { ...state, difficultWords: action.payload };
    case UPDATE_DELETED_WORDS:
      return { ...state, deletedWords: action.payload };
    default:
      return state;
  }
}

export default aggregatedWordsReducer;
