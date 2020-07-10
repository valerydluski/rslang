import { INITIAL_STATISTIC } from '../config';

const checkInitialStatistic = (statisticFromApi) => {
  const newStatistic = {};
  Object.keys(INITIAL_STATISTIC).forEach((key) => {
    if (statisticFromApi[`${key}`]) {
      newStatistic[`${key}`] = statisticFromApi[`${key}`];
    } else {
      newStatistic[`${key}`] = INITIAL_STATISTIC[`${key}`];
    }
  });
  return newStatistic;
};

export default checkInitialStatistic;
