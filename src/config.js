import savannahPoster from './assets/img/posters/savannah.svg';
import speakItPoster from './assets/img/posters/speakit.svg';
import puzzlePoster from './assets/img/posters/puzzle.svg';
import audioCallPoster from './assets/img/posters/audio-call.svg';
import sprintPoster from './assets/img/posters/sprint.svg';
import getRedirectFunction from './utils/getRedirectFunction';

export const API = {
  // URL: 'https://afternoon-falls-25894.herokuapp.com',
  URL: 'https://pacific-castle-12388.herokuapp.com',
  ENDPOINTS: {
    USERS: 'users',
    SIGNIN: 'signin',
    WORDS: 'words',
    SETTINGS: 'settings',
  },

  QUERIES: {
    WORDS: {
      GROUP: 'group',
      PAGE: 'page',
      WORDS_PER_SENTENCE: 'wordsPerExampleSentenceLTE',
      WORDS_PER_PAGE: 'wordsPerPage',
      COUNT: 'count',
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
];

export const MIN_WORDS_PER_DAY = 1;
export const MAX_WORDS_PER_DAY = 600;
export const MAX_WORDS_PER_PAGE = 25;
export const MIN_WORDS_PER_PAGE = 5;

export const GAME_MAX_PAGE = 60;
export const GAME_MAX_LEVEL = 6;

export const CHECKBOXES = [
  'textExample',
  'textMeaning',
  'transcription',
  'translate',
  'imageAssociation',
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
