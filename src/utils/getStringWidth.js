const metric = document.getElementById('metric');

function getStringWidth(str) {
  metric.innerHTML = str;
  setTimeout(() => {metric.innerHTML = ''}, 0);
  return metric.offsetWidth;
}

export default getStringWidth;
