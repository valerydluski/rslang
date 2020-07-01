import { SET_FLAG_LOAD_DATA, LOAD_DATA_FROM_API } from './types';

export function isDataLoadFromApi() {
  return {
    type: SET_FLAG_LOAD_DATA,
  };
}

export function loadDataFromApi() {
  return {
    type: LOAD_DATA_FROM_API,
  };
}
