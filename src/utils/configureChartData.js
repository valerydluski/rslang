import scaleFunction from './scaleFunction';

function configureChartData(times) {
  const daysMap = new Map();
  times.forEach((item) => {
    daysMap.set(item, daysMap.has(item) ? daysMap.get(item) + 1 : 1);
  });
  const days = [];
  Array.from(daysMap.keys()).forEach((item) => {
    days.push({
      date: new Date(item),
      count: daysMap.get(item),
    });
  });

  let acc = days[0].count;
  const points = days.map((item, index) => {
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
    days,
    points,
    chartPoints,
    xMin: 0,
    xMax: chartPoints.length <= 5 ? 5 : chartPoints.length,
    yMin: 0,
    yMax: 1,
  };
}

export default configureChartData;
