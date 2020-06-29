import {
  SPEAKIT_LAST_ROUND,
  ENGLISHPUZZLE_LAST_ROUND,
  SAVANNAH_ROUND,
  AUDIOCALL_LAST_ROUND,
  SPRINT_LAST_ROUND,
  OWNGAME_LAST_ROUND,
  SPEAKIT_PASSED_ROUND,
  ENGLISHPUZZLE_PASSED_ROUND,
  SAVANNAH_PASSED_ROUND,
  AUDIOCALL_PASSED_ROUND,
  SPRINT_PASSED_ROUND,
  OWNGAME_PASSED_ROUND,
  LEARN_LAST_WORDS,
  LEARN_LAST_LEVEL,
} from './types';

export function changeSpeakItLastRound(round) {
  return {
    type: SPEAKIT_LAST_ROUND,
    payload: round,
  };
}

export function changeEnglishPuzzleLastRound(round) {
  return {
    type: ENGLISHPUZZLE_LAST_ROUND,
    payload: round,
  };
}

export function changeSavannahLastRound(round) {
  return {
    type: SAVANNAH_ROUND,
    payload: round,
  };
}

export function changeAudioCallLastRound(round) {
  return {
    type: AUDIOCALL_LAST_ROUND,
    payload: round,
  };
}

export function changeSprintLastRound(round) {
  return {
    type: SPRINT_LAST_ROUND,
    payload: round,
  };
}

export function changeOwnGameLastRound(round) {
  return {
    type: OWNGAME_LAST_ROUND,
    payload: round,
  };
}

export function changeSpeakITPassedRound(passedRound) {
  return {
    type: SPEAKIT_PASSED_ROUND,
    payload: passedRound,
  };
}

export function changeEnglishPuzzlePassedRound(passedRound) {
  return {
    type: ENGLISHPUZZLE_PASSED_ROUND,
    payload: passedRound,
  };
}

export function changeSavannahPassedRound(passedRound) {
  return {
    type: SAVANNAH_PASSED_ROUND,
    payload: passedRound,
  };
}

export function changeAudioCallPassedRound(passedRound) {
  return {
    type: AUDIOCALL_PASSED_ROUND,
    payload: passedRound,
  };
}

export function changeSprintPassedRound(passedRound) {
  return {
    type: SPRINT_PASSED_ROUND,
    payload: passedRound,
  };
}

export function changeOwnGamePassedRound(passedRound) {
  return {
    type: OWNGAME_PASSED_ROUND,
    payload: passedRound,
  };
}

export function changeLearnLasrWord(lastWord) {
  return {
    type: LEARN_LAST_WORDS,
    payload: lastWord,
  };
}

export function changeLearnLasrLevel(lastLevel) {
  return {
    type: LEARN_LAST_LEVEL,
    payload: lastLevel,
  };
}
