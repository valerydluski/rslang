import { FETCH_WORDS, FETCH_OLD_WORDS } from './types';

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
