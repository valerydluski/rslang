import { IS_ALREADY_CHECK_SESSION_STATUS } from './types';

const initialState = {
  isAlreadyCheckStatusSession: false,
};

export default function isStatusCheckedReducer(state = initialState, action) {
  switch (action.type) {
    case IS_ALREADY_CHECK_SESSION_STATUS:
      return { ...state, isAlreadyCheckStatusSession: true };
    default:
      return state;
  }
}
