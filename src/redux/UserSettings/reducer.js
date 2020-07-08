import { SAVE_USER_SETTINGS_TO_STORE } from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  settings: {
    name: 'Buddy',
    language: 'en',
    WordsPerDay: 20,
    CardsPerDay: 20,
    deleteButton: true,
    addDificultWordsButton: true,
    howToLearnWords: 'newWords',
    SpeakITWordsPerPage: '10',
    SavannahWordsPerPage: '10',
    AudioCallWordsPerPage: '10',
    SprintWordsPerPage: '10',
    MakeSentenceWordsPerPage: '10',
    isTranslate: true,
    isTextMeaning: true,
    isTextExample: true,
    isTranscription: true,
    isImageAssociation: true,
    isAudioTranslate: true,
    isAudioTextMeaning: true,
    isAudioTextExample: true,
    isAutoSpeech: true,
    isTranslation: true,
    isBackground: true,
  },
};

function userSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_USER_SETTINGS_TO_STORE:
      return {
        ...state,
        settings: action.payload,
      };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
}

export default userSettingsReducer;
