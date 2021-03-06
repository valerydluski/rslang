import { FETCH_WORDS, FETCH_OLD_WORDS, SAVE_OLD_WORDS, SAVE_CORRECT_INDEXES } from './types';

export function fetchWords(data) {
  return {
    type: FETCH_WORDS,
    payload: data,
  };
}

export function fetchOldWords(data) {
  return {
    type: FETCH_OLD_WORDS,
    payload: data,
  };
}

export function saveOldWords(words) {
  return {
    type: SAVE_OLD_WORDS,
    payload: words,
  };
}

export function saveCorrectIndexes(arr) {
  return {
    type: SAVE_CORRECT_INDEXES,
    payload: arr,
  };
}
