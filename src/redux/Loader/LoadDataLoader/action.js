import { SHOW_LOADER_CHECK, HIDE_LOADER_CHECK } from './types';

export function loadDataLoaderShow() {
  return {
    type: SHOW_LOADER_CHECK,
  };
}

export function loadDataLoaderHide() {
  return {
    type: HIDE_LOADER_CHECK,
  };
}
