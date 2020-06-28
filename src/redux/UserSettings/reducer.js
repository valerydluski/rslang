import { SAVE_USER_SETTINGS, SAVE_USER_NAME } from './types';

const initialState = {
  settings: {
    name: '',
    language: 'en',
    WordsPerDay: 1,
    CardsPerDay: 1,
    deleteButton: 'active',
    addDificultWordsButton: 'active',
    howToLearnWords: 'newWords',
    SpeakITWordsPerPage: '15',
    SavannahWordsPerPage: '10',
    AudioCallWordsPerPage: '10',
    SprintWordsPerPage: '10',
  },
};

function userSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    case SAVE_USER_NAME:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
}

export default userSettingsReducer;
