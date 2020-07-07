import { SET_FLAG_LOAD_DATA } from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  isDataLoadFromApi: false,
};

export default function loadDataFromApiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FLAG_LOAD_DATA:
      return { ...state, isDataLoadFromApi: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
}
