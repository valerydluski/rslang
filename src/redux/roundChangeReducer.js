import { SPEAKIT_CHANGE_LEVEL, SPEAKIT_CHANGE_PAGE } from './types';

const initialState = {
  speakITLevel: '1',
  speakITPage: '1',
};

const roundChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAKIT_CHANGE_LEVEL:
      return { ...state, speakITLevel: action.payload };
    case SPEAKIT_CHANGE_PAGE:
      return { ...state, speakITPage: action.payload };
    default:
      return state;
  }
};

export default roundChangeReducer;
