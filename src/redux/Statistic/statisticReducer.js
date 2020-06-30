import { SAVE_FULL_STATISTIC, GET_STATISTIC_FROM_API } from './types';

const initialState = {
  statistic: {
    SpeakITLastRound: '1_1',
    EnglishPuzzleLastRound: '1_1',
    SavannahLastRound: '1_1',
    AudioCallLastRound: '1_1',
    SprintLastRound: '1_1',
    OwnGameLastRound: '1_1',
    SpeakITPassedRound: '0',
    EnglishPuzzlePassedRound: '0',
    SavannahPassedRound: '0',
    AudioCallPassedRound: '0',
    SprintPassedRound: '0',
    OwnGamePassedRound: '0',
    LearnLastWords: '0',
    LearnLastLevel: '0',
  },
};

const changeStatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FULL_STATISTIC:
      return { ...state, statistic: action.payload };
    case GET_STATISTIC_FROM_API:
      return { ...state, statistic: action.payload.statistic };
    default:
      return state;
  }
};

export default changeStatisticReducer;
