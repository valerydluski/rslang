import {
  SPEAKIT_CHANGE_LEVEL,
  SPEAKIT_CHANGE_PAGE,
  ENGLISHPUZZLE_CHANGE_PAGE,
  ENGLISHPUZZLE_CHANGE_LEVEL,
  SAVANNAH_CHANGE_LEVEL,
  SAVANNAH_CHANGE_PAGE,
  AUDIOCALL_CHANGE_PAGE,
  AUDIOCALL_CHANGE_LEVEL,
  SPRINT_CHANGE_PAGE,
  SPRINT_CHANGE_LEVEL,
  OWNGAME_CHANGE_PAGE,
  OWNGAME_CHANGE_LEVEL,
} from './types';

const initialState = {};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_CHANGE_LEVEL:
      return { ...state, gameLevel: action.payload };
    case SPEAKIT_CHANGE_PAGE:
      return { ...state, gamePage: action.payload };
    case ENGLISHPUZZLE_CHANGE_PAGE:
      return { ...state, IDontKnowWords: action.payload };
    case ENGLISHPUZZLE_CHANGE_LEVEL:
      return { ...state, gameScore: action.payload };
    case SAVANNAH_CHANGE_LEVEL:
      return { ...state, gameLevel: action.payload };
    case SAVANNAH_CHANGE_PAGE:
      return { ...state, gamePage: action.payload };
    case AUDIOCALL_CHANGE_PAGE:
      return { ...state, IDontKnowWords: action.payload };
    case AUDIOCALL_CHANGE_LEVEL:
      return { ...state, gameScore: action.payload };
    case SPRINT_CHANGE_PAGE:
      return { ...state, IDontKnowWords: action.payload };
    case SPRINT_CHANGE_LEVEL:
      return { ...state, gameScore: action.payload };
    case OWNGAME_CHANGE_PAGE:
      return { ...state, IDontKnowWords: action.payload };
    case OWNGAME_CHANGE_LEVEL:
      return { ...state, gameScore: action.payload };
    default:
      return state;
  }
};

export default gamesReducer;
