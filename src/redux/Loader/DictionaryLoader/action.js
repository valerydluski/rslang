import { SHOW_LOADER_DICTIONARY, HIDE_LOADER_DICTIONARY } from './types';

export function showDictionaryLoader() {
  return {
    type: SHOW_LOADER_DICTIONARY,
  };
}

export function hideDictionaryLoader() {
  return {
    type: HIDE_LOADER_DICTIONARY,
  };
}
