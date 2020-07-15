import { CHANGE_APP_MODE, CHANGE_APP_MODE_LEARN } from './types';

export function changeAppMode(mode) {
  return {
    type: CHANGE_APP_MODE,
    payload: mode,
  };
}

export function changeAppModeLearn(mode) {
  return {
    type: CHANGE_APP_MODE_LEARN,
    payload: mode,
  };
}
