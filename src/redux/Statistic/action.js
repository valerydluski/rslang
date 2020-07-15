import {
  SAVE_FULL_STATISTIC,
  GET_STATISTIC_FROM_API,
  SAVE_FULL_STATISTIC_TO_STORE,
  SET_LEARN_WORDS_STATISTIC,
  SAVE_FULL_STATISTIC_TO_SERVER,
  SAVE_REPEAT_STATISTIC,
} from './types';

export function saveFullStatisticToApi() {
  return {
    type: SAVE_FULL_STATISTIC_TO_SERVER,
  };
}

export function saveFullStatistic(statistic) {
  return {
    type: SAVE_FULL_STATISTIC,
    payload: statistic,
  };
}

export function getStatistic(statistic) {
  return {
    type: GET_STATISTIC_FROM_API,
    payload: statistic,
  };
}

export function saveFullStatisticToStore(statistic) {
  return {
    type: SAVE_FULL_STATISTIC_TO_STORE,
    payload: statistic,
  };
}

export function setLearnWordsStatistic(obj) {
  return {
    type: SET_LEARN_WORDS_STATISTIC,
    payload: obj,
    from: 'LearnWords',
  };
}

export function setRepeatStatistic(num) {
  return {
    type: SAVE_REPEAT_STATISTIC,
    payload: num,
  };
}
