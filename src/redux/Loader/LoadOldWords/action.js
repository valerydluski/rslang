import { SHOW_LOADER_OLD_GAME, HIDE_LOADER_OLD_GAME } from './types';

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
