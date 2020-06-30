import { setLocale } from 'react-redux-i18n';
import { SAVE_USER_SETTINGS, SAVE_USER_NAME } from './types';

export function saveUserSettings(data) {
  return (dispatch) => {
    dispatch(setLocale(data.language));
    return {
      type: SAVE_USER_SETTINGS,
      payload: data,
    };
  };
}

export function saveUserName(data) {
  return {
    type: SAVE_USER_NAME,
    payload: data,
  };
}
