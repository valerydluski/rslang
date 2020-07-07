import { SAVE_FULL_STATISTIC_TO_STORE, GET_STATISTIC_FROM_API } from './types';

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
    LearnLastWords: '0',
    LearnLastLevel: '0',
    RepeatWordsToday: [],
    CountCardsShow: '0',
    CountNewWordsToday: '0',
    lastTrain: '0',
  },
};

const changeStatisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FULL_STATISTIC_TO_STORE:
      return { ...state, statistic: action.payload };
    case GET_STATISTIC_FROM_API:
      return { ...state, statistic: action.payload.statistic };
    default:
      return state;
  }
};

export default changeStatisticReducer;
