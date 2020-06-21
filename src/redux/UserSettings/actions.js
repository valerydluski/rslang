import SAVE_USER_SETTINGS from './types';

export default function saveUserSettings(data) {
  return {
    type: SAVE_USER_SETTINGS,
    payload: data,
  };
}
