import MAX_PAGE from './types';

const initialState = {
  maxPage: 60,
};

const DefineMaxPagePerLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAX_PAGE:
      return { ...state, maxPage: action.payload };
    default:
      return state;
  }
};

export default DefineMaxPagePerLevelReducer;
