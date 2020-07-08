import {
  SAVE_USER_WORDS,
  GET_USER_WORDS,
  GET_AGGREGATED_WORDS,
  UPDATE_LEARNING_WORDS,
  UPDATE_DIFFICULT_WORDS,
  UPDATE_DELETED_WORDS,
  LOADING_USER_WORDS,
} from './types';

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

export function updateLearningWords(words) {
  return {
    type: UPDATE_LEARNING_WORDS,
    payload: words,
  };
}

export function updateDifficultWords(words) {
  return {
    type: UPDATE_DIFFICULT_WORDS,
    payload: words,
  };
}

export function updateDeletedWords(words) {
  return {
    type: UPDATE_DELETED_WORDS,
    payload: words,
  };
}

export function getAggregatedWords() {
  return {
    type: GET_AGGREGATED_WORDS,
  };
}

export function loadUserWords(bool) {
  return {
    type: LOADING_USER_WORDS,
    payload: bool,
  };
}
