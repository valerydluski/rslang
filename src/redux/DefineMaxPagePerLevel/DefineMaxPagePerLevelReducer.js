import MAX_PAGE from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  maxPage: 60,
};

const DefineMaxPagePerLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAX_PAGE:
      return { ...state, maxPage: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
};
export default DefineMaxPagePerLevelReducer;
