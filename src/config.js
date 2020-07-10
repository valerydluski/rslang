import savannahPoster from './assets/img/posters/savannah.svg';
import speakItPoster from './assets/img/posters/speakit.svg';
import puzzlePoster from './assets/img/posters/puzzle.svg';
import audioCallPoster from './assets/img/posters/audio-call.svg';
import sprintPoster from './assets/img/posters/sprint.svg';
import makeSentencePoster from './assets/img/posters/make-sentence.svg';
import getRedirectFunction from './utils/getRedirectFunction';

export const API = {
  URL: 'https://afternoon-falls-25894.herokuapp.com',
  ENDPOINTS: {
    USERS: 'users',
    SIGNIN: 'signin',
    WORDS: 'words',
    SETTINGS: 'settings',
    STATISTICS: 'statistics',
    DICTIONARY: 'aggregatedWords',
  },

  QUERIES: {
    WORDS: {
      GROUP: 'group',
      PAGE: 'page',
      WORDS_PER_SENTENCE: 'wordsPerExampleSentenceLTE',
      WORDS_PER_PAGE: 'wordsPerPage',
      COUNT: 'count',
      FILTER: 'filter',
    },
  },
};

export const DEFAULT_LANGUAGE = 'ru';
export const SUPPORTED_LANGUAGES = {
  en: 'en',
  ru: 'ru',
};

export const LINK_FOR_IMAGE = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';
export const LINK_FOR_AUDIO = LINK_FOR_IMAGE;
export const LINK_FOR_ENGLISH_PUZZLE_IMAGE =
  'https://raw.githubusercontent.com/valerydluski/Images/master/';

export const GAME_LIST = [
  {
    title: 'Games.savannah',
    description: 'Games.savannahDescription',
    poster: savannahPoster,
    onClick: getRedirectFunction('/StartGame/Savannah/'),
  },
  {
    title: 'Games.speakIT',
    description: 'Games.speakITDescription',
    poster: speakItPoster,
    onClick: getRedirectFunction('/StartGame/SpeakIT/'),
  },
  {
    title: 'Games.puzzle',
    description: 'Games.puzzleDescription',
    poster: puzzlePoster,
    onClick: getRedirectFunction('/StartGame/EnglishPuzzle/'),
  },
  {
    title: 'Games.audioCall',
    description: 'Games.audioCallDescription',
    poster: audioCallPoster,
    onClick: getRedirectFunction('/StartGame/AudioCall/'),
  },
  {
    title: 'Games.sprint',
    description: 'Games.sprintDescription',
    poster: sprintPoster,
    onClick: getRedirectFunction('/StartGame/Sprint/'),
  },
  {
    title: 'Games.makeSentence',
    description: 'Games.makeSentenceDescription',
    poster: makeSentencePoster,
    onClick: getRedirectFunction('/StartGame/MakeSentence/'),
  },
];

export const MIN_WORDS_PER_DAY = 1;
export const MAX_WORDS_PER_DAY = 600;
export const MAX_WORDS_PER_PAGE = 25;
export const MIN_WORDS_PER_PAGE = 5;

export const GAME_MAX_PAGE = 60;
export const GAME_MAX_LEVEL = 6;

export const WORDS_PER_PAGE = 600;

export const CHECKBOXES = [
  'isTranslate',
  'isTextMeaning',
  'isTextExample',
  'isTranscription',
  'isImageAssociation',
];

export const SCREEN_SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};
export const GAME_NAME = {
  speakIT: 'SpeakIT',
  englishPuzzle: 'EnglishPuzzle',
  savannah: 'Savannah',
  audioCall: 'AudioCall',
  sprint: 'Sprint',
  makeSentence: 'MakeSentence',
  learnWords: 'LearnWords',
};

export const DEVICE = {
  mobileS: `(max-width: ${SCREEN_SIZE.mobileS}px)`,
  mobileM: `(max-width: ${SCREEN_SIZE.mobileM}px)`,
  mobileL: `(max-width: ${SCREEN_SIZE.mobileL}px)`,
  tablet: `(max-width: ${SCREEN_SIZE.tablet}px)`,
  laptop: `(max-width: ${SCREEN_SIZE.laptop}px)`,
  laptopL: `(max-width: ${SCREEN_SIZE.laptopL}px)`,
  desktop: `(max-width: ${SCREEN_SIZE.desktop}px)`,
  desktopL: `(max-width: ${SCREEN_SIZE.desktop}px)`,
};

export const INITIAL_STATISTIC = {
  SpeakITLastRound: '0',
  EnglishPuzzleLastRound: '0',
  SavannahLastRound: '0',
  AudioCallLastRound: '0',
  SprintLastRound: '0',
  MakeSentenceLastRound: '0',
  SpeakITPassedRound: '0',
  EnglishPuzzlePassedRound: '0',
  SavannahPassedRound: '0',
  AudioCallPassedRound: '0',
  SprintPassedRound: '0',
  MakeSentencePassedRound: '0',
  LearnLastWords: '0',
  LearnLastLevel: '0',
  RepeatWordsToday: '[]',
  CountCardsShow: '0',
  CountNewWordsToday: '0',
  lastTrain: '0',
};

export const INIT_GAMES_ROUND = [
  'SpeakITLastRound',
  'EnglishPuzzleLastRound',
  'SavannahLastRound',
  'AudioCallLastRound',
  'SprintLastRound',
  'MakeSentenceLastRound',
  'Learn',
];

export const INITIAL_SETTINGS = {
  name: 'Buddy',
  language: 'en',
  wordsPerDay: 20,
  cardsPerDay: 30,
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
  isAudioTranslate: false,
  isAudioTextMeaning: false,
  isAudioTextExample: false,
  isAutoSpeech: true,
  isTranslation: true,
  isBackground: true,
  sprintTimeForWord: '2',
  savannahTimeForWord: '2',
  savannahMaxErrorCounter: '5',
};
