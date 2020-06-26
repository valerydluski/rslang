import {
  UPDATE_PUZZLES_POSITION,
  UPDATE_DATA,
  UPDATE_ROW,
  UPDATE_PAGE,
  UPDATE_AUDIOS,
  UPDATE_TRANSLATIONS,
  CHANGE_ROW_STATUS,
  CHANGE_PAGE_STATUS,
  SWITCH_AUTOSPEECH,
  SWITCH_TRANSLATION,
  SWITCH_SPEECH,
  SWITCH_BACKGROUND,
} from './types';

const initialState = {
  data: [],
  translations: [],
  audios: [],
  source: [],
  results: [],
  pic: {
    url:
      'https://raw.githubusercontent.com/tarasdemidovich1995/rslang_data_paintings/master/level1/waterfal.jpg',
    name: 'lorem',
    author: 'lorem',
    year: 'lorem',
  },
  row: 0,
  isRowFill: false,
  isRowCorrect: false,
  level: 0,
  page: 0,
  isPageFill: false,
  isLoading: true,
  autoSpeech: false,
  translation: true,
  speech: true,
  background: false,
};

const englishPuzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PUZZLES_POSITION:
      return {
        ...state,
        results: action.results,
        source: action.source,
      };
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
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page,
        isLoading: true,
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
    case SWITCH_AUTOSPEECH:
      return {
        ...state,
        autoSpeech: !state.autoSpeech,
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
    default:
      return state;
  }
};

export default englishPuzzleReducer;
