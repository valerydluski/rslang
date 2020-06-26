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
  SpeakITLevel: '1',
  SpeakITPage: '1',
  EnglishPuzzleLevel: '1',
  EnglishPuzzlePage: '1',
  SavannahLevel: '1',
  SavannahPage: '1',
  AudioCallLevel: '1',
  AudioCallPage: '1',
  SprintLevel: '1',
  SprintPage: '1',
  OwnGameLevel: '1',
  OwnGamePage: '1',
};

const changeRoundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_CHANGE_LEVEL:
      return { ...state, SpeakITLevel: action.payload };
    case SPEAKIT_CHANGE_PAGE:
      return { ...state, SpeakITPage: action.payload };
    case ENGLISHPUZZLE_CHANGE_PAGE:
      return { ...state, EnglishPuzzlePage: action.payload };
    case ENGLISHPUZZLE_CHANGE_LEVEL:
      return { ...state, EnglishPuzzleLevel: action.payload };
    case SAVANNAH_CHANGE_LEVEL:
      return { ...state, SavannahLevel: action.payload };
    case SAVANNAH_CHANGE_PAGE:
      return { ...state, SavannahPage: action.payload };
    case AUDIOCALL_CHANGE_PAGE:
      return { ...state, AudioCallPage: action.payload };
    case AUDIOCALL_CHANGE_LEVEL:
      return { ...state, AudioCallLevel: action.payload };
    case SPRINT_CHANGE_PAGE:
      return { ...state, SprintPage: action.payload };
    case SPRINT_CHANGE_LEVEL:
      return { ...state, SprintLevel: action.payload };
    case OWNGAME_CHANGE_PAGE:
      return { ...state, OwnGamePage: action.payload };
    case OWNGAME_CHANGE_LEVEL:
      return { ...state, OwnGameLevel: action.payload };
    default:
      return state;
  }
};

export default changeRoundReducer;
