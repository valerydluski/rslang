import {
  SPEAKIT_CHANGE_LEVEL,
  SPEAKIT_CHANGE_PAGE,
  CHANGE_WORDS_COLLECTION,
  CHANGE_UNSPOKEN_WORDS,
} from './types';

export function changeSpeakITLevel(level) {
  return {
    type: SPEAKIT_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeSpeakITPage(page) {
  return {
    type: SPEAKIT_CHANGE_PAGE,
    payload: page,
  };
}

export function changeWordsCollection(wordsCollection) {
  return {
    type: CHANGE_WORDS_COLLECTION,
    payload: wordsCollection,
  };
}

export function changeUnspokenWords(unspokenWords) {
  return {
    type: CHANGE_UNSPOKEN_WORDS,
    payload: unspokenWords,
  };
}
