import getStringWidth from '../utils/getStringWidth';
import { ENGLISH_PUZZLE_CONSTANTS, LINK_FOR_ENGLISH_PUZZLE_IMAGE, LINK_FOR_IMAGE } from '../config';
import paintings from '../assets/data/paintings';
import loadImage from './loadImage';
import loadAudio from './loadAudio';

const findTagExp = /<\w+>|<\/\w+>/g;

export function calculatePuzzleData(page, index) {
  const { PUZZLE_PADDING, PUZZLE_HEIGHT, PLAYFIELD_WIDTH } = ENGLISH_PUZZLE_CONSTANTS.GEOMETRY;
  const newPage = { ...page };
  const rowKeys = Object.keys(newPage);
  rowKeys.forEach((key) => {
    newPage[key].width = getStringWidth(newPage[key].word);
  });

  let bgXOffset = 0;
  const bgYOffset = index * PUZZLE_HEIGHT;
  const fullWidth = rowKeys.reduce((acc, key) => acc + newPage[key].width, 0);
  const freeWidth = PLAYFIELD_WIDTH - fullWidth;
  const extraWidth = (PUZZLE_PADDING * (rowKeys.length - 1) + freeWidth) / rowKeys.length;

  rowKeys.forEach((key) => {
    const newWidth = newPage[key].width + extraWidth;
    newPage[key].width = newWidth;
    newPage[key].bgXOffset = bgXOffset;
    newPage[key].bgYOffset = bgYOffset;
    bgXOffset += newWidth - PUZZLE_PADDING;
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
