import { SHOW_LOADER_CHECK, HIDE_LOADER_CHECK } from './types';

export function checkStatusShowLoader() {
  return {
    type: SHOW_LOADER_CHECK,
  };
}

export function checkStatusHideLoader() {
  return {
    type: HIDE_LOADER_CHECK,
  };
}
