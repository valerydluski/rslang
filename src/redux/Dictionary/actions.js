import { SAVE_USER_WORDS, GET_USER_WORDS } from './types';

export function saveUserWords(words) {
  return {
    type: SAVE_USER_WORDS,
    payload: words,
  };
}

export function getUserWords() {
  return {
    type: GET_USER_WORDS,
  };
}
