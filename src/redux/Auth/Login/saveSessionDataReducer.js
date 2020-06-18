const { SAVE_SESSION_DATA } = require('./types');

const initialState = {
  id: '',
  token: '',
};

function saveSessionDataReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SESSION_DATA:
      return { ...state, id: action.payload.id, token: action.payload.token };
    default:
      return state;
  }
}

export default saveSessionDataReducer;
