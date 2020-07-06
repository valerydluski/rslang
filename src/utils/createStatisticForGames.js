const createStatisticForGame = (statistic, gameName) => {
  const passedRound = statistic[`${gameName}PassedRound`];
  const arr = passedRound.split(';').map((el) => el.split('-'));
  return arr;
};
export default createStatisticForGame;
