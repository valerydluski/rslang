import getStringWidth from './getStringWidth';

function caclOwnWordsSentenceWidth(sentence) {
  const widths = sentence.split(' ').map((word) => getStringWidth(word, 20));
  const playfieldWidth = 1000;
  const margin = 10;
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
