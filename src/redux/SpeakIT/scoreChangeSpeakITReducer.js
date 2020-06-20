import { SPEAKIT_CHANGE_SCORE } from './types';

const initialState = {
  speakITScore: 0,
};

const scoreChangeSpeakITReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_CHANGE_SCORE:
      return { ...state, speakITScore: action.payload };
    default:
      return state;
  }
};

export default scoreChangeSpeakITReducer;
