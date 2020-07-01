import {
  SPEAKIT_CHANGE_LEVEL,
  SPEAKIT_CHANGE_PAGE,
  ENGLISHPUZZLE_CHANGE_PAGE,
  ENGLISHPUZZLE_CHANGE_LEVEL,
  SAVANNAH_CHANGE_LEVEL,
  SAVANNAH_CHANGE_PAGE,
  AUDIOCALL_CHANGE_PAGE,
  AUDIOCALL_CHANGE_LEVEL,
  SPRINT_CHANGE_PAGE,
  SPRINT_CHANGE_LEVEL,
  MAKESENTENCE_CHANGE_LEVEL,
  MAKESENTENCE_CHANGE_PAGE,
  LEARN_WORDS_CHANGE_PAGE,
  LEARN_WORDS_CHANGE_LEVEL,
} from './types';

export function changeSpeakItLevel(level) {
  return {
    type: SPEAKIT_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeSpeakItPage(page) {
  return {
    type: SPEAKIT_CHANGE_PAGE,
    payload: page,
  };
}

export function changeEnglishPuzzleLevel(level) {
  return {
    type: ENGLISHPUZZLE_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeEnglishPuzzlePage(page) {
  return {
    type: ENGLISHPUZZLE_CHANGE_PAGE,
    payload: page,
  };
}

export function changeSavannahLevel(level) {
  return {
    type: SAVANNAH_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeSavannahPage(page) {
  return {
    type: SAVANNAH_CHANGE_PAGE,
    payload: page,
  };
}

export function changeAudioCallLevel(level) {
  return {
    type: AUDIOCALL_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeAudioCallPage(page) {
  return {
    type: AUDIOCALL_CHANGE_PAGE,
    payload: page,
  };
}

export function changeSprintLevel(level) {
  return {
    type: SPRINT_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeSprintPage(page) {
  return {
    type: SPRINT_CHANGE_PAGE,
    payload: page,
  };
}

export function changeMakeSentenceLevel(level) {
  return {
    type: MAKESENTENCE_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeMakeSentencePage(page) {
  return {
    type: MAKESENTENCE_CHANGE_PAGE,
    payload: page,
  };
}

export function changeLearnWordsLevel(level) {
  return {
    type: LEARN_WORDS_CHANGE_LEVEL,
    payload: level,
  };
}

export function changeLearnWordsPage(page) {
  return {
    type: LEARN_WORDS_CHANGE_PAGE,
    payload: page,
  };
}
