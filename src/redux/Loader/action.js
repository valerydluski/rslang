import { SHOW_LOADER, HIDE_LOADER, SHOW_LOADER_OLD_GAME, HIDE_LOADER_OLD_GAME } from './types';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function hideLoaderOldGame() {
  return {
    type: HIDE_LOADER_OLD_GAME,
  };
}

export function showLoaderOldGame() {
  return {
    type: SHOW_LOADER_OLD_GAME,
  };
}
