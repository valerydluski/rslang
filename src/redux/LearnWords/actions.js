import { NEW_CARD_SHOW, CORRECT_CARD, SAVE_WORD_TO_STATE } from './types';

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
