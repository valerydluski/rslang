const metric = document.createElement('span');
metric.style.position = 'absolute';
metric.style.top = '0px';
metric.style.left = '-100px';
metric.style.fontSize = '10px';
metric.style.fontWeight = 'bold';
metric.style.textTransform = 'uppercase';

function getStringWidth(str) {
  document.body.append(metric);
  metric.innerHTML = str;
  setTimeout(() => {
    metric.remove();
  }, 0);
  return metric.offsetWidth;
}

export default getStringWidth;
