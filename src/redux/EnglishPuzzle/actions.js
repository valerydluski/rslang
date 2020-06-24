import { ENGLISH_PUZZLE_CONSTANTS } from '../../config';
import getStringWidth from '../../utils/getStringWidth';

import {
  UPDATE_PUZZLES_POSITION,
  UPDATE_DATA,
  UPDATE_ROW,
  UPDATE_PAGE,
  CHANGE_ROW_STATUS,
  CHANGE_PAGE_STATUS,
} from './types';

export function updatePuzzlesPosition(results, source) {
  return {
    type: UPDATE_PUZZLES_POSITION,
    results,
    source,
  };
}

export function updateData(data) {
  return {
    type: UPDATE_DATA,
    data,
  };
}

export function updateRow(row) {
  return {
    type: UPDATE_ROW,
    row,
  };
}

export function updatePage(page) {
  return {
    type: UPDATE_PAGE,
    page,
  };
}

export function changeRowStatus(isRowFill, isRowCorrect) {
  return {
    type: CHANGE_ROW_STATUS,
    isRowFill,
    isRowCorrect,
  };
}

export function changePageStatus(isPageFill) {
  return {
    type: CHANGE_PAGE_STATUS,
    isPageFill,
  };
}

export function updateSource() {
  return (dispatch, getState) => {
    const { data, row } = getState().englishPuzzle;
    const source = Object.keys(data[row]).sort(() => Math.random() - 0.5);
    const results = [];
    dispatch(updatePuzzlesPosition(results, source));
  };
}

export function updatePageStatus(row) {
  return (dispatch) => {
    console.log(dispatch, row);
    if (row === ENGLISH_PUZZLE_CONSTANTS.ROWS_IN_PAGE) {
      const isPageFill = true;
      dispatch(changePageStatus(isPageFill));
    } else {
      dispatch(updateRow(row));
      dispatch(updateSource());
    }
  };
}

export function checkPuzzlesPosition() {
  return (dispatch, getState) => {
    const { results, data, row } = getState().englishPuzzle;
    const correct = Object.keys(data[row]);
    const isRowFill = results.length === correct.length;
    const isRowCorrect = results.join('') === correct.join('');
    dispatch(changeRowStatus(isRowFill, isRowCorrect));
  };
}

export function pickRow() {
  return (dispatch, getState) => {
    const { data, row } = getState().englishPuzzle;
    const correct = Object.keys(data[row]);
    dispatch(updatePuzzlesPosition(correct, []));
    dispatch(checkPuzzlesPosition());
  };
}

export function transferToSource(event) {
  return (dispatch, getState) => {
    const id = event.target.dataset.rbdDraggableId;
    const results = getState().englishPuzzle.results.concat();
    const source = getState().englishPuzzle.source.concat();
    const index = results.findIndex((item) => item === id);

    results.splice(index, 1);
    source.push(id);

    dispatch(updatePuzzlesPosition(results, source));
    dispatch(checkPuzzlesPosition());
  };
}

export function transferToPlayfield(event) {
  return (dispatch, getState) => {
    const id = event.target.dataset.rbdDraggableId;
    const results = getState().englishPuzzle.results.concat();
    const source = getState().englishPuzzle.source.concat();
    const index = source.findIndex((item) => item === id);

    source.splice(index, 1);
    results.push(id);

    dispatch(updatePuzzlesPosition(results, source));
    dispatch(checkPuzzlesPosition());
  };
}

export function onDragEnd(result) {
  return (dispatch, getState) => {
    const { destination, source } = result;
    const { TARGET_ID, SOURCE_ID } = ENGLISH_PUZZLE_CONSTANTS;
    const sourceState = getState().englishPuzzle.source.concat();
    const resultsState = getState().englishPuzzle.results.concat();
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (destination.droppableId === TARGET_ID && source.droppableId === SOURCE_ID) {
      const item = sourceState.splice(source.index, 1);
      resultsState.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === TARGET_ID && source.droppableId === TARGET_ID) {
      const item = resultsState.splice(source.index, 1);
      resultsState.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === SOURCE_ID && source.droppableId === SOURCE_ID) {
      const item = sourceState.splice(source.index, 1);
      sourceState.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === SOURCE_ID && source.droppableId === TARGET_ID) {
      const item = resultsState.splice(source.index, 1);
      sourceState.splice(destination.index, 0, ...item);
    }
    dispatch(updatePuzzlesPosition(resultsState, sourceState));
    dispatch(checkPuzzlesPosition());
  };
}

export function calculatePuzzlesData() {
  return (dispatch, getState) => {
    const { data } = getState().englishPuzzle;
    const { PUZZLE_PADDING, PUZZLE_HEIGHT, PLAYFIELD_WIDTH } = ENGLISH_PUZZLE_CONSTANTS.GEOMETRY;
    data.forEach((page, index) => {
      const pageKeys = Object.keys(page);
      pageKeys.forEach((key) => {
        page[key].width = getStringWidth(page[key].word);
      });
      let bgXOffset = 0;
      const bgYOffset = index * PUZZLE_HEIGHT;
      const fullWidth = pageKeys.reduce((acc, key) => acc + page[key].width, 0);
      const freeWidth = PLAYFIELD_WIDTH - fullWidth;
      const extraWidth = (PUZZLE_PADDING * (pageKeys.length - 1) + freeWidth) / pageKeys.length;

      pageKeys.forEach((key) => {
        const newWidth = page[key].width + extraWidth;
        page[key].width = page[key].width + extraWidth;
        page[key].bgXOffset = bgXOffset;
        page[key].bgYOffset = bgYOffset;
        bgXOffset += newWidth - PUZZLE_PADDING;
      });
    });
    dispatch(updateData(data));
  };
}
