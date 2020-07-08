import {
  UPDATE_PUZZLES_POSITION,
  UPDATE_DATA,
  UPDATE_ROW,
  UPDATE_AUDIOS,
  UPDATE_TRANSLATIONS,
  UPDATE_STATE,
  CHANGE_ROW_STATUS,
  CHANGE_PAGE_STATUS,
  SWITCH_AUTOSPEECH,
  SWITCH_TRANSLATION,
  SWITCH_SPEECH,
  SWITCH_BACKGROUND,
  UPDATE_PIC,
  PUZZLE_SETTINGS_FROM_API,
} from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  data: [{}],
  translations: [],
  audios: [new Audio()],
  source: [],
  results: [],
  pic: {
    id: '',
    imageSrc: '',
    cutSrc: '',
    name: '',
    author: '',
    year: '',
  },
  row: 0,
  isRowFill: false,
  isRowCorrect: false,
  isPageFill: false,
  autoSpeech: true,
  translation: true,
  speech: true,
  background: true,
};

const englishPuzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PUZZLES_POSITION:
      return {
        ...state,
        results: action.results,
        source: action.source,
      };
    case UPDATE_STATE: {
      return {
        ...state,
        data: action.data,
        audios: action.audios,
        translations: action.translations,
        pic: action.pic,
        isPageFill: false,
        isRowFill: false,
        isRowCorrect: false,
        source: [],
        results: [],
        row: 0,
      };
    }
    case UPDATE_DATA:
      return {
        ...state,
        data: action.data,
      };
    case UPDATE_ROW:
      return {
        ...state,
        row: action.row,
        isRowFill: false,
        isRowCorrect: false,
      };
    case CHANGE_PAGE_STATUS:
      return {
        ...state,
        isPageFill: action.isPageFill,
      };
    case CHANGE_ROW_STATUS:
      return {
        ...state,
        isRowFill: action.isRowFill,
        isRowCorrect: action.isRowCorrect,
      };
    case UPDATE_AUDIOS:
      return {
        ...state,
        audios: action.audios,
      };
    case UPDATE_TRANSLATIONS:
      return {
        ...state,
        translations: action.translations,
      };
    case UPDATE_PIC:
      return {
        ...state,
        pic: action.pic,
      };
    case SWITCH_AUTOSPEECH:
      return {
        ...state,
        autoSpeech: !state.autoSpeech,
      };
    case PUZZLE_SETTINGS_FROM_API:
      return {
        ...state,
        autoSpeech: action.payload.isAutoSpeech,
        translation: action.payload.isTranslation,
        background: action.payload.isBackground,
      };
    case SWITCH_TRANSLATION:
      return {
        ...state,
        translation: !state.translation,
      };
    case SWITCH_SPEECH:
      return {
        ...state,
        speech: !state.speech,
      };
    case SWITCH_BACKGROUND: {
      return {
        ...state,
        background: !state.background,
      };
    }
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};

export default englishPuzzleReducer;
