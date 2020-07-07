import { NEW_CARD_SHOW } from '../types';
import RESET_STORE from '../../resetStore/types';

const initialState = {
  card: {},
};

function newLearnCardShow(state = initialState, action) {
  switch (action.type) {
    case NEW_CARD_SHOW:
      return { ...state, card: action.payload };
    case RESET_STORE:
      return { ...initialState };
    default:
      return state;
  }
}

export default newLearnCardShow;
