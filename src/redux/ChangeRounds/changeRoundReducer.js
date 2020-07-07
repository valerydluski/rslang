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
  MAKESENTENCE_CHANGE_PAGE,
  MAKESENTENCE_CHANGE_LEVEL,
  LEARN_WORDS_CHANGE_PAGE,
  LEARN_WORDS_CHANGE_LEVEL,
  CHANGE_INITIAL_ROUND,
} from './types';
import RESET_STORE from '../resetStore/types';

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
  MakeSentenceLevel: '1',
  MakeSentencePage: '1',
  LearnWordsLevel: '1',
  LearnWordsPage: '1',
};

const changeRoundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_CHANGE_LEVEL:
      return { ...state, SpeakITLevel: action.payload, SpeakITPage: '1' };
    case SPEAKIT_CHANGE_PAGE:
      return { ...state, SpeakITPage: action.payload };
    case ENGLISHPUZZLE_CHANGE_PAGE:
      return { ...state, EnglishPuzzlePage: action.payload };
    case ENGLISHPUZZLE_CHANGE_LEVEL:
      return { ...state, EnglishPuzzleLevel: action.payload, EnglishPuzzlePage: '1' };
    case SAVANNAH_CHANGE_LEVEL:
      return { ...state, SavannahLevel: action.payload, SavannahPage: '1' };
    case SAVANNAH_CHANGE_PAGE:
      return { ...state, SavannahPage: action.payload };
    case AUDIOCALL_CHANGE_PAGE:
      return { ...state, AudioCallPage: action.payload };
    case AUDIOCALL_CHANGE_LEVEL:
      return { ...state, AudioCallLevel: action.payload, AudioCallPage: '1' };
    case SPRINT_CHANGE_PAGE:
      return { ...state, SprintPage: action.payload };
    case SPRINT_CHANGE_LEVEL:
      return { ...state, SprintLevel: action.payload, SprintPage: '1' };
    case MAKESENTENCE_CHANGE_PAGE:
      return { ...state, MakeSentencePage: action.payload };
    case MAKESENTENCE_CHANGE_LEVEL:
      return { ...state, MakeSentenceLevel: action.payload, MakeSentencePage: '1' };
    case LEARN_WORDS_CHANGE_PAGE:
      return { ...state, LearnWordsLevel: action.payload };
    case LEARN_WORDS_CHANGE_LEVEL:
      return { ...state, LearnWordsPage: action.payload };
    case CHANGE_INITIAL_ROUND:
      return {
        ...state,
        SpeakITLevel: action.payload.SpeakITLevel,
        SpeakITPage: action.payload.SpeakITPage,
        EnglishPuzzleLevel: action.payload.EnglishPuzzleLevel,
        EnglishPuzzlePage: action.payload.EnglishPuzzlePage,
        SavannahLevel: action.payload.SavannahLevel,
        SavannahPage: action.payload.SavannahPage,
        AudioCallLevel: action.payload.AudioCallLevel,
        AudioCallPage: action.payload.AudioCallPage,
        SprintLevel: action.payload.SprintLevel,
        SprintPage: action.payload.SprintPage,
        MakeSentenceLevel: action.payload.MakeSentenceLevel,
        MakeSentencePage: action.payload.MakeSentencePage,
      };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};

export default changeRoundReducer;
