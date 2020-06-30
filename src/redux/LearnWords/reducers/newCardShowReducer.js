import { NEW_CARD_SHOW } from '../types';

const initialState = {
  card: {},
};

function newLearnCardShow(state = initialState, action) {
  switch (action.type) {
    case NEW_CARD_SHOW:
      return { ...state, card: action.payload };
    default:
      return state;
  }
}

export default newLearnCardShow;
