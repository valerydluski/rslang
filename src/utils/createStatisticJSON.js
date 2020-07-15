const createStatisticJSON = (statistic) => {
  const newStatistic = { ...statistic };
  newStatistic.lastUpdateDate = new Date().valueOf();
  return {
    optional: newStatistic,
  };
};

export default createStatisticJSON;
