import {
  UPDATE_PUZZLES_POSITION,
  UPDATE_DATA,
  UPDATE_ROW,
  UPDATE_PAGE,
  CHANGE_ROW_STATUS,
} from './types';

const initialState = {
  data: [
    {
      The_1: { id: 'The_1', word: 'The', order: 1 },
      woman_2: { id: 'woman_2', word: 'woman', order: 2 },
      like_3: { id: 'like_3', word: 'like', order: 3 },
      to_4: { id: 'to_4', word: 'to', order: 4 },
      ride_5: { id: 'ride_5', word: 'ride', order: 5 },
      a_6: { id: 'a_6', word: 'a', order: 6 },
      bicycle_7: { id: 'bicycle_7', word: 'bicycle', order: 7 },
    },
    {
      I_1: { id: 'I_1', word: 'I', order: 1 },
      like_2: { id: 'like_2', word: 'like', order: 2 },
      to_3: { id: 'to_3', word: 'to', order: 3 },
      drive_4: { id: 'drive_4', word: 'drive', order: 4 },
      my_5: { id: 'my_5', word: 'my', order: 5 },
      car_6: { id: 'car_6', word: 'car', order: 6 },
    },
    {
      The_1: { id: 'The_1', word: 'The', order: 1 },
      woman_2: { id: 'woman_2', word: 'woman', order: 2 },
      like_3: { id: 'like_3', word: 'like', order: 3 },
      to_4: { id: 'to_4', word: 'to', order: 4 },
      ride_5: { id: 'ride_5', word: 'ride', order: 5 },
      a_6: { id: 'a_6', word: 'a', order: 6 },
      bicycle_7: { id: 'bicycle_7', word: 'bicycle', order: 7 },
    },
    {
      I_1: { id: 'I_1', word: 'I', order: 1 },
      like_2: { id: 'like_2', word: 'like', order: 2 },
      to_3: { id: 'to_3', word: 'to', order: 3 },
      drive_4: { id: 'drive_4', word: 'drive', order: 4 },
      my_5: { id: 'my_5', word: 'my', order: 5 },
      car_6: { id: 'car_6', word: 'car', order: 6 },
    },
    {
      The_1: { id: 'The_1', word: 'The', order: 1 },
      woman_2: { id: 'woman_2', word: 'woman', order: 2 },
      like_3: { id: 'like_3', word: 'like', order: 3 },
      to_4: { id: 'to_4', word: 'to', order: 4 },
      ride_5: { id: 'ride_5', word: 'ride', order: 5 },
      a_6: { id: 'a_6', word: 'a', order: 6 },
      bicycle_7: { id: 'bicycle_7', word: 'bicycle', order: 7 },
    },
    {
      I_1: { id: 'I_1', word: 'I', order: 1 },
      like_2: { id: 'like_2', word: 'like', order: 2 },
      to_3: { id: 'to_3', word: 'to', order: 3 },
      drive_4: { id: 'drive_4', word: 'drive', order: 4 },
      my_5: { id: 'my_5', word: 'my', order: 5 },
      car_6: { id: 'car_6', word: 'car', order: 6 },
    },
    {
      The_1: { id: 'The_1', word: 'The', order: 1 },
      woman_2: { id: 'woman_2', word: 'woman', order: 2 },
      like_3: { id: 'like_3', word: 'like', order: 3 },
      to_4: { id: 'to_4', word: 'to', order: 4 },
      ride_5: { id: 'ride_5', word: 'ride', order: 5 },
      a_6: { id: 'a_6', word: 'a', order: 6 },
      bicycle_7: { id: 'bicycle_7', word: 'bicycle', order: 7 },
    },
    {
      I_1: { id: 'I_1', word: 'I', order: 1 },
      like_2: { id: 'like_2', word: 'like', order: 2 },
      to_3: { id: 'to_3', word: 'to', order: 3 },
      drive_4: { id: 'drive_4', word: 'drive', order: 4 },
      my_5: { id: 'my_5', word: 'my', order: 5 },
      car_6: { id: 'car_6', word: 'car', order: 6 },
    },
    {
      The_1: { id: 'The_1', word: 'The', order: 1 },
      woman_2: { id: 'woman_2', word: 'woman', order: 2 },
      like_3: { id: 'like_3', word: 'like', order: 3 },
      to_4: { id: 'to_4', word: 'to', order: 4 },
      ride_5: { id: 'ride_5', word: 'ride', order: 5 },
      a_6: { id: 'a_6', word: 'a', order: 6 },
      bicycle_7: { id: 'bicycle_7', word: 'bicycle', order: 7 },
    },
    {
      I_1: { id: 'I_1', word: 'I', order: 1 },
      like_2: { id: 'like_2', word: 'like', order: 2 },
      to_3: { id: 'to_3', word: 'to', order: 3 },
      drive_4: { id: 'drive_4', word: 'drive', order: 4 },
      my_5: { id: 'my_5', word: 'my', order: 5 },
      car_6: { id: 'car_6', word: 'car', order: 6 },
    },
  ],
  translations: [],
  audios: [],
  source: [],
  results: [],
  pic: null,
  row: 0,
  isRowFill: false,
  isRowCorrect: false,
  level: 0,
  page: 0,
  isPageFill: false,
  isLoading: true,
  autoSpeech: true,
  translation: true,
  speech: true,
  background: true,
};

const englishPuzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PUZZLES_POSITION:
      return {
        ...state,
        results: action.results,
        source: action.source,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.data,
      };
    case UPDATE_ROW:
      return {
        ...state,
        row: action.row,
        isRowFill: false,
        isRowCorrect: false,
      };
    case UPDATE_PAGE:
      return {
        ...state,
        page: action.page,
        isLoading: true,
      };
    case CHANGE_ROW_STATUS:
      return {
        ...state,
        isRowFill: action.isRowFill,
        isRowCorrect: action.isRowCorrect,
      };
    default:
      return state;
  }
};

export default englishPuzzleReducer;
