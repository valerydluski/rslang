import { SPEAKIT_CHANGE_SCORE } from './types';

function changeScoreSpeakIT(score) {
  return {
    type: SPEAKIT_CHANGE_SCORE,
    payload: score,
  };
}

export default changeScoreSpeakIT;
