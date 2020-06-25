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

const initialState = {
  speakItLevel: '1',
  speakItPage: '1',
  englishPuzzleLevel: '1',
  englishPuzzlePage: '1',
  savannahLevel: '1',
  savannahPage: '1',
  audioCallLevel: '1',
  audioCallPage: '1',
  sprintLevel: '1',
  sprintPage: '1',
  ownGameLevel: '1',
  ownGamePage: '1',
};

const changeRoundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_CHANGE_LEVEL:
      return { ...state, speakItLevel: action.payload };
    case SPEAKIT_CHANGE_PAGE:
      return { ...state, speakItPage: action.payload };
    case ENGLISHPUZZLE_CHANGE_PAGE:
      return { ...state, englishPuzzlePage: action.payload };
    case ENGLISHPUZZLE_CHANGE_LEVEL:
      return { ...state, englishPuzzleLevel: action.payload };
    case SAVANNAH_CHANGE_LEVEL:
      return { ...state, savannahLevel: action.payload };
    case SAVANNAH_CHANGE_PAGE:
      return { ...state, savannahPage: action.payload };
    case AUDIOCALL_CHANGE_PAGE:
      return { ...state, audioCallPage: action.payload };
    case AUDIOCALL_CHANGE_LEVEL:
      return { ...state, audioCallLevel: action.payload };
    case SPRINT_CHANGE_PAGE:
      return { ...state, sprintPage: action.payload };
    case SPRINT_CHANGE_LEVEL:
      return { ...state, sprintLevel: action.payload };
    case OWNGAME_CHANGE_PAGE:
      return { ...state, ownGamePage: action.payload };
    case OWNGAME_CHANGE_LEVEL:
      return { ...state, ownGameLevel: action.payload };
    default:
      return state;
  }
};

export default changeRoundReducer;
