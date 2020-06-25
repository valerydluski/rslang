import {
  GAME_CHANGE_LEVEL,
  GAME_CHANGE_PAGE,
  CHANGE_WORDS_COLLECTION,
  CHANGE_I_DONT_KNOW_WORDS,
  GAME_CHANGE_SCORE,
} from './types';

export function changeGameLevel(level) {
  return {
    type: GAME_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeGamePage(page) {
  return {
    type: GAME_CHANGE_PAGE,
    payload: page,
  };
}

export function changeWordsCollection(wordsCollection) {
  return {
    type: CHANGE_WORDS_COLLECTION,
    payload: wordsCollection,
  };
}

export function changeIDontKnowWords(IDontKnowWords) {
  return {
    type: CHANGE_I_DONT_KNOW_WORDS,
    payload: IDontKnowWords,
  };
}

export function changeScoreGame(score) {
  return {
    type: GAME_CHANGE_SCORE,
    payload: score,
  };
}
