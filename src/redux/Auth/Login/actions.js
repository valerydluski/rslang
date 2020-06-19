import { SAVE_SESSION_DATA, AUTH_TO_SERVER } from './types';

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
