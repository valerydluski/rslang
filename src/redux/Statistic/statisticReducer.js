import { SAVE_FULL_STATISTIC_TO_STORE, GET_STATISTIC_FROM_API } from './types';
import RESET_STORE from '../resetStore/types';

const initialState = {
  statistic: {
    SpeakITLastRound: '0',
    EnglishPuzzleLastRound: '0',
    SavannahLastRound: '0',
    AudioCallLastRound: '0',
    SprintLastRound: '0',
    MakeSentenceLastRound: '0',
    SpeakITPassedRound: '0',
    EnglishPuzzlePassedRound: '0',
    SavannahPassedRound: '0',
    AudioCallPassedRound: '0',
    SprintPassedRound: '0',
    MakeSentencePassedRound: '0',
    LearnLastPage: '0',
    LearnLastLevel: '0',
  },
};

const changeStatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FULL_STATISTIC_TO_STORE:
      return { ...state, statistic: action.payload };
    case RESET_STORE:
      return { ...initialState };
    case GET_STATISTIC_FROM_API:
      return { ...state, statistic: action.payload.statistic };
    default:
      return state;
  }
};

export default changeStatisticReducer;
