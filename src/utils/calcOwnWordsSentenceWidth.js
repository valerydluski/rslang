import getStringWidth from './getStringWidth';
import getScreenWidth from './getScreenWidth';
import { SCREEN_SIZE } from '../config';

function caclOwnWordsSentenceWidth(sentence) {
  const currentWidth = getScreenWidth();
  let fontSize;
  let playfieldWidth;
  let margin;
  switch (true) {
    case currentWidth > SCREEN_SIZE.laptopL:
      fontSize = 20;
      playfieldWidth = 1200;
      margin = 5;
      break;
    case currentWidth > SCREEN_SIZE.laptop:
      fontSize = 15;
      playfieldWidth = 924;
      margin = 5;
      break;
    case currentWidth > SCREEN_SIZE.tablet:
      playfieldWidth = 668;
      fontSize = 12;
      margin = 3;
      break;
    case currentWidth > SCREEN_SIZE.mobileL:
      playfieldWidth = 528;
      fontSize = 10;
      margin = 2;
      break;
    default:
      break;
  }
  const widths = sentence.split(' ').map((word) => getStringWidth(word, fontSize));
  const fullWidth = widths.reduce((acc, width) => acc + width, 0);
  const freeWidth = playfieldWidth - fullWidth;
  const extraWidth = (freeWidth - margin * 2 * widths.length) / widths.length;
  const result = {};
  sentence.split(' ').forEach((word, index) => {
    result[word] = widths[index] + extraWidth;
  });
  return result;
}

export default caclOwnWordsSentenceWidth;
