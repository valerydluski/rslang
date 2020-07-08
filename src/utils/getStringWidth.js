import getScreenWidth from './getScreenWidth';
import { SCREEN_SIZE } from '../config';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

function getStringWidth(str, fontSize) {
  if (fontSize) {
    ctx.font = `bold ${fontSize}px Montserrat`;
  } else {
    if (getScreenWidth() <= SCREEN_SIZE.laptop) {
      ctx.font = 'bold 7px Montserrat';
    }
    ctx.font = 'bold 10px Montserrat';
  }
  return ctx.measureText(str).width;
}

export default getStringWidth;
