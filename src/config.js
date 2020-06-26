import savannahPoster from './assets/img/posters/savannah.svg';
import speakItPoster from './assets/img/posters/speakit.svg';
import puzzlePoster from './assets/img/posters/puzzle.svg';
import audioCallPoster from './assets/img/posters/audio-call.svg';
import sprintPoster from './assets/img/posters/sprint.svg';
import getRedirectFunction from './utils/getRedirectFunction';

export const API = {
  URL: 'https://afternoon-falls-25894.herokuapp.com',
  ENDPOINTS: {
    USERS: 'users',
    SIGNIN: 'signin',
    WORDS: 'words',
    SETTINGS: 'settings',
  },
};

export const DEFAULT_LANGUAGE = 'ru';

export const LINK_FOR_IMAGE = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';

export const gamesList = [
  {
    title: 'Savannah',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    poster: savannahPoster,
    onClick: getRedirectFunction('/StartGame/Savannah/'),
  },
  {
    title: 'SpeakIT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    poster: speakItPoster,
    onClick: getRedirectFunction('/StartGame/SpeakIT/'),
  },
  {
    title: 'Puzzle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    poster: puzzlePoster,
    onClick: getRedirectFunction('/StartGame/EnglishPuzzle/'),
  },
  {
    title: 'AudioCall',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    poster: audioCallPoster,
    onClick: getRedirectFunction('/StartGame/AudioCall/'),
  },
  {
    title: 'Sprint',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    poster: sprintPoster,
    onClick: getRedirectFunction('/StartGame/Sprint/'),
  },
];

export const MIN_WORDS_PER_DAY = 1;
export const MAX_WORDS_PER_DAY = 600;
