import {
  NEW_CARD_SHOW,
  CORRECT_CARD,
  SAVE_WORD_TO_STATE,
  NEW_CARD_VALUE_SHOWS,
  NEXT_NEW_CARD,
  ADD_TO_DISPLAYED_WORDS_LIST,
  SHOW_RESULT,
  RESET_STORE_REPEAT_WORDS,
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

export function addToShowedWordsList(arr) {
  return {
    type: ADD_TO_DISPLAYED_WORDS_LIST,
    payload: arr,
  };
}

export function showResult(bool) {
  return {
    type: SHOW_RESULT,
    payload: bool,
  };
}

export function resetStoreRepeatWords() {
  return {
    type: RESET_STORE_REPEAT_WORDS,
  };
}
