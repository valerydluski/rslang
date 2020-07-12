import { GET_ALL_WORDS, UPDATE_CHART_DATA } from './types';

export function updateChartData(words) {
  return {
    type: UPDATE_CHART_DATA,
    payload: words,
  };
}

export function getAllWords() {
  return {
    type: GET_ALL_WORDS,
  };
}
