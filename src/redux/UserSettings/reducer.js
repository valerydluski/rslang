import { SAVE_USER_SETTINGS_TO_STORE } from './types';

const initialState = {
  settings: {
    name: 'Buddy',
    language: 'en',
    WordsPerDay: 20,
    CardsPerDay: 20,
    deleteButton: true,
    addDificultWordsButton: true,
    howToLearnWords: 'newWords',
    SpeakITWordsPerPage: '15',
    SavannahWordsPerPage: '10',
    AudioCallWordsPerPage: '10',
    SprintWordsPerPage: '10',
    MakeSentenceWordsPerPage: '10',
    isTranslate: true,
    isTextMeaning: true,
    isTextExample: true,
    isTranscription: true,
    isImageAssociation: true,
  },
};

function userSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_SETTINGS_TO_STORE:
      return {
        ...state,
        settings: action.payload,
      };
    default:
      return state;
  }
}

export default userSettingsReducer;
