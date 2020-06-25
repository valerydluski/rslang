import { ENGLISH_PUZZLE_CONSTANTS } from '../../config';
import getStringWidth from '../../utils/getStringWidth';

import {
  UPDATE_PUZZLES_POSITION,
  UPDATE_DATA,
  UPDATE_ROW,
  UPDATE_PAGE,
  UPDATE_AUDIOS,
  UPDATE_TRANSLATIONS,
  CHANGE_ROW_STATUS,
  CHANGE_PAGE_STATUS,
  SWITCH_AUTOSPEECH,
  SWITCH_TRANSLATION,
  SWITCH_SPEECH,
  SWITCH_BACKGROUND,
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

export function updateTranslations(translations) {
  return {
    type: UPDATE_TRANSLATIONS,
    translations,
  };
}

export function updateAudios(audios) {
  return {
    type: UPDATE_AUDIOS,
    audios,
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

export function switchAutoSpeech() {
  return {
    type: SWITCH_AUTOSPEECH,
  };
}

export function switchTranslation() {
  return {
    type: SWITCH_TRANSLATION,
  };
}

export function switchSpeech() {
  return {
    type: SWITCH_SPEECH,
  };
}

export function switchBackground() {
  return {
    type: SWITCH_BACKGROUND,
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

export function calculatePuzzlesData(data) {
  const newData = data;
  const { PUZZLE_PADDING, PUZZLE_HEIGHT, PLAYFIELD_WIDTH } = ENGLISH_PUZZLE_CONSTANTS.GEOMETRY;

  newData.forEach((page, index) => {
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

  return data;
}

export function configureData() {
  return (dispatch, getState) => {
    const { wordsData } = getState().englishPuzzle;
    let data = [];
    const translations = [];
    const audios = [];
    wordsData.forEach((item) => {
      const dataElem = {};
      item.textExample.split(' ').forEach((word, index) => {
        dataElem[`${word}_${index + 1}`] = {
          id: `${word}_${index + 1}`,
          word,
          order: index + 1,
        };
      });
      data.push(dataElem);
      translations.push(item.textExampleTranslate);
      audios.push(item.audioExample);
    });
    data = calculatePuzzlesData(data);
    dispatch(updateData(data));
    dispatch(updateTranslations(translations));
    dispatch(updateAudios(audios));
  };
}
