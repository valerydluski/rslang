import CHANGE_APP_MODE from './types';

function changeAppMode(mode) {
  return {
    type: CHANGE_APP_MODE,
    payload: mode,
  };
}

export default changeAppMode;
