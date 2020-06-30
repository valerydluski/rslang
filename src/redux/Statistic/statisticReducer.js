import {
  SPEAKIT_LAST_ROUND,
  ENGLISHPUZZLE_LAST_ROUND,
  SAVANNAH_ROUND,
  AUDIOCALL_LAST_ROUND,
  SPRINT_LAST_ROUND,
  OWNGAME_LAST_ROUND,
  SPEAKIT_PASSED_ROUND,
  ENGLISHPUZZLE_PASSED_ROUND,
  SAVANNAH_PASSED_ROUND,
  AUDIOCALL_PASSED_ROUND,
  SPRINT_PASSED_ROUND,
  OWNGAME_PASSED_ROUND,
  LEARN_LAST_WORDS,
  LEARN_LAST_LEVEL,
} from './types';

const initialState = {
  SpeakITLastRound: '1_1',
  EnglishPuzzleLastRound: '1_1',
  SavannahLastRound: '1_1',
  AudioCallLastRound: '1_1',
  SprintLastRound: '1_1',
  OwnGameLastRound: '1_1',
  SpeakITPassedRound: '0',
  EnglishPuzzlePassedRound: '0',
  SavannahPassedRound: '0',
  AudioCallPassedRound: '0',
  SprintPassedRound: '0',
  OwnGamePassedRound: '0',
  LearnLastWords: '0',
  LearnLastLevel: '0',
};

const changeStatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_LAST_ROUND:
      return { ...state, SpeakITLastRound: action.payload };
    case ENGLISHPUZZLE_LAST_ROUND:
      return { ...state, EnglishPuzzleLastRound: action.payload };
    case SAVANNAH_ROUND:
      return { ...state, SavannahLastRound: action.payload };
    case AUDIOCALL_LAST_ROUND:
      return { ...state, AudioCallLastRound: action.payload };
    case SPRINT_LAST_ROUND:
      return { ...state, SprintLastRound: action.payload };
    case OWNGAME_LAST_ROUND:
      return { ...state, OwnGameLastRound: action.payload };
    case SPEAKIT_PASSED_ROUND:
      return { ...state, SpeakITPassedRound: action.payload };
    case ENGLISHPUZZLE_PASSED_ROUND:
      return { ...state, EnglishPuzzlePassedRound: action.payload };
    case SAVANNAH_PASSED_ROUND:
      return { ...state, SavannahPassedRound: action.payload };
    case AUDIOCALL_PASSED_ROUND:
      return { ...state, AudioCallPassedRound: action.payload };
    case SPRINT_PASSED_ROUND:
      return { ...state, SprintPassedRound: action.payload };
    case OWNGAME_PASSED_ROUND:
      return { ...state, OwnGamePassedRound: action.payload };
    case LEARN_LAST_WORDS:
      return { ...state, LearnLastWords: action.payload };
    case LEARN_LAST_LEVEL:
      return { ...state, LearnLastLevel: action.payload };
    default:
      return state;
  }
};

export default changeStatisticReducer;
