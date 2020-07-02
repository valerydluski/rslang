import { SAVE_USER_SETTINGS_TO_API, SAVE_USER_SETTINGS_TO_STORE } from './types';

export function saveUserSettingsToAPI(data) {
  return {
    type: SAVE_USER_SETTINGS_TO_API,
    payload: data,
  };
}

export function saveUserSettingsToStore(data) {
  return {
    type: SAVE_USER_SETTINGS_TO_STORE,
    payload: data,
  };
}
