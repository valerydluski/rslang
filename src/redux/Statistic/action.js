import { SAVE_FULL_STATISTIC, GET_STATISTIC_FROM_API } from './types';

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