const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.font = 'bold 10px Montserrat';

function getStringWidth(str) {
  return ctx.measureText(str).width;
}

export default getStringWidth;
