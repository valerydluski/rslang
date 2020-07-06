import scaleFunction from './scaleFunction';

function configureChartData() {
  const reduxData = [];
  for (let i = 0; i < 25; i += 1) {
    const date = new Date(Date.now());
    date.setDate(date.getDate() + i);
    const count = Math.ceil(Math.random() * 50);
    reduxData.push({
      date,
      count,
    });
  }
  let acc = reduxData[0].count;
  const points = reduxData.map((item, index) => {
    if (index === 0) return item;
    acc += item.count;
    return {
      date: item.date,
      count: acc,
    };
  });
  const chartPoints = points.map((item, index) => {
    return {
      x: index,
      y: scaleFunction(item.count),
    };
  });

  return {
    reduxData,
    points,
    chartPoints,
    xMin: 0,
    xMax: chartPoints.length - 1 < 10 ? 10 : chartPoints.length - 1,
    yMin: 0,
    yMax: 1,
  };
}

export default configureChartData;
