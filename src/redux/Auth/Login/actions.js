import {
  SAVE_SESSION_DATA,
  AUTH_TO_SERVER,
  CHECK_SESSION_STATUS,
  RESET_SESSION_DATA,
} from './types';

export function saveSessionData(data) {
  return {
    type: SAVE_SESSION_DATA,
    payload: data,
  };
}

export function authToServer(data) {
  return {
    type: AUTH_TO_SERVER,
    payload: data,
  };
}

export function checkStatusSession() {
  return {
    type: CHECK_SESSION_STATUS,
  };
}

export function resetSessionData() {
  return {
    type: RESET_SESSION_DATA,
  };
}
