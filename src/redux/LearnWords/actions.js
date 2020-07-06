import {
  NEW_CARD_SHOW,
  CORRECT_CARD,
  SAVE_WORD_TO_STATE,
  CHANGE_LEVEL_CARD,
  CHANGE_PAGE_CARD,
  NEW_CARD_VALUE_SHOWS,
  NEXT_NEW_CARD,
  LOADING_NEW_CARD_SHOW,
  LOADING_NEW_CARD_HIDE,
  GENERATE_LEARN_WORDS_COLLECTION,
  SAVE_LEARN_WORDS_COLLECTION,
  LOADER_WORDS_COLLECTION_SHOW,
  LOADER_WORDS_COLLECTION_HIDE,
  IS_WORD_COLLECTION_LOADED,
} from './types';

export function showNewCard(card) {
  return {
    type: NEW_CARD_SHOW,
    payload: card,
  };
}

export function correctCard(bool) {
  return {
    type: CORRECT_CARD,
    payload: bool,
  };
}

export function saveWordToState(arr) {
  return {
    type: SAVE_WORD_TO_STATE,
    payload: arr,
  };
}

export function changeLevelCard(lvl) {
  return {
    type: CHANGE_LEVEL_CARD,
    payload: lvl,
  };
}

export function changePageCard(page) {
  return {
    type: CHANGE_PAGE_CARD,
    payload: page,
  };
}

export function newCardValueShows(num) {
  return {
    type: NEW_CARD_VALUE_SHOWS,
    payload: num,
  };
}

export function nextNewCard() {
  return {
    type: NEXT_NEW_CARD,
  };
}

export function loadNewWordShow() {
  return {
    type: LOADING_NEW_CARD_SHOW,
    payload: true,
  };
}

export function loadNewWordHide() {
  return {
    type: LOADING_NEW_CARD_HIDE,
    payload: false,
  };
}

export function generateLearnWordsCollection(data) {
  return {
    type: GENERATE_LEARN_WORDS_COLLECTION,
    payload: data,
  };
}

export function saveLearnWordsCollection(data) {
  return {
    type: SAVE_LEARN_WORDS_COLLECTION,
    payload: data,
  };
}

export function wordsCollectionLoaderShow() {
  return {
    type: LOADER_WORDS_COLLECTION_SHOW,
  };
}

export function wordsCollectionLoaderHide() {
  return {
    type: LOADER_WORDS_COLLECTION_HIDE,
  };
}

export function isWordsCollectionLoadedHandler(bool) {
  return {
    type: IS_WORD_COLLECTION_LOADED,
    payload: bool,
  };
}
