import { FETCH_WORDS } from './types';

export default function fetchWords(data) {
  return {
    type: FETCH_WORDS,
    payload: data,
  };
}
