import getStringWidth from '../utils/getStringWidth';
import { LINK_FOR_IMAGE, LINK_FOR_ENGLISH_PUZZLE_IMAGE, SCREEN_SIZE } from '../config';
import {
  PLAYFIELD_WIDTH,
  PUZZLE_HEIGHT,
  PUZZLE_PADDING,
  PLAYFIELD_WIDTH_LAPTOP,
  PUZZLE_HEIGHT_LAPTOP,
  PUZZLE_PADDING_LAPTOP,
} from '../containers/EnglishPuzzle/Game/constants';

import paintings from '../assets/data/paintings';
import loadImage from './loadImage';
import loadAudio from './loadAudio';

const findTagExp = /<\w+>|<\/\w+>/g;

export function calculatePuzzleData(page, index) {
  const newPage = { ...page };
  const rowKeys = Object.keys(newPage);
  rowKeys.forEach((key) => {
    newPage[key].width = getStringWidth(newPage[key].word);
  });
  const screenWidth = window.innerWidth;
  let playfieldWidth;
  let puzzleHeight;
  let puzzlePadding;
  switch (true) {
    case screenWidth <= SCREEN_SIZE.laptop:
      playfieldWidth = PLAYFIELD_WIDTH_LAPTOP;
      puzzleHeight = PUZZLE_HEIGHT_LAPTOP;
      puzzlePadding = PUZZLE_PADDING_LAPTOP;
      break;
    default:
      playfieldWidth = PLAYFIELD_WIDTH;
      puzzleHeight = PUZZLE_HEIGHT;
      puzzlePadding = PUZZLE_PADDING;
      break;
  }
  let bgXOffset = 0;
  const bgYOffset = index * puzzleHeight;
  const fullWidth = rowKeys.reduce((acc, key) => acc + newPage[key].width, 0);
  const freeWidth = playfieldWidth - fullWidth;
  const extraWidth = (puzzlePadding * (rowKeys.length - 1) + freeWidth) / rowKeys.length;

  rowKeys.forEach((key) => {
    const newWidth = newPage[key].width + extraWidth;
    newPage[key].width = newWidth;
    newPage[key].bgXOffset = bgXOffset;
    newPage[key].bgYOffset = bgYOffset;
    bgXOffset += newWidth - puzzlePadding;
  });
  return newPage;
}

export async function configureData(wordsList, level, page) {
  const data = [];
  const translations = [];
  const audiosSrc = [];
  const pic = paintings[level - 1][page - 1];
  wordsList.forEach((item) => {
    const dataElem = {};
    item.textExample
      .replace(findTagExp, '')
      .split(' ')
      .forEach((word, index) => {
        dataElem[`${word}_${index + 1}`] = {
          id: `${word}_${index + 1}`,
          word,
          order: index + 1,
        };
      });
    data.push(dataElem);
    translations.push(item.textExampleTranslate);
    audiosSrc.push(item.audioExample);
  });
  await loadImage(`${LINK_FOR_ENGLISH_PUZZLE_IMAGE}${pic.cutSrc}`);
  await loadImage(`${LINK_FOR_ENGLISH_PUZZLE_IMAGE}PuzzleBg.jpg`);
  const audios = await Promise.all(
    audiosSrc.map((audio) => loadAudio(`${LINK_FOR_IMAGE}${audio}`))
  );
  return {
    data: data.map(calculatePuzzleData),
    audios,
    translations,
    pic,
  };
}
