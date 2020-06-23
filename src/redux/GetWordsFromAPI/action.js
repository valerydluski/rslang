import { FETCH_WORDS } from './types';

export default function fetchWords(data) {
  console.log('fetchWords -> data', data);
  return {
    type: FETCH_WORDS,
    payload: data,
  };
}
