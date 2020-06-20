const initialState = {
  status: {
    level: 0,
    page: 0
  },
  tips: {
    autoSpeech: true,
    translation: true,
    speech: true,
    background: true
  }
};

const englishPuzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default englishPuzzleReducer;
