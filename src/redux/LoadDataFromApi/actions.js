import { SET_FLAG_LOAD_DATA, LOAD_DATA_FROM_API } from './types';

export function isDataLoadFromApi(data) {
  return {
    type: SET_FLAG_LOAD_DATA,
    payload: data,
  };
}

export function loadDataFromApi() {
  return {
    type: LOAD_DATA_FROM_API,
  };
}
