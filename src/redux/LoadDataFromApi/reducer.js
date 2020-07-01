import { SET_FLAG_LOAD_DATA } from './types';

const initialState = {
  isDataLoadFromApi: false,
};

export default function loadDataFromApiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FLAG_LOAD_DATA:
      return { ...state, isDataLoadFromApi: action.payload };
    default:
      return state;
  }
}
