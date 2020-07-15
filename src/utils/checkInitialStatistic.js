import { INITIAL_STATISTIC } from '../config';

const checkInitialStatistic = (stat) => {
  const statisticFromApi = stat.statistic || stat;
  const newStatistic = {};
  Object.keys(INITIAL_STATISTIC).forEach((key) => {
    if (statisticFromApi[`${key}`] !== undefined) {
      newStatistic[`${key}`] = statisticFromApi[`${key}`];
    } else {
      newStatistic[`${key}`] = INITIAL_STATISTIC[`${key}`];
    }
  });
  return newStatistic;
};

export default checkInitialStatistic;
