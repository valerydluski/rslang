const createGameEndData = (level, page, collection, Statistic, wrongWords, gameName) => {
  const lastRound = `${level}_${page}`;
  const newStatistic = Statistic;
  const date = new Date();
  const formater = new Intl.DateTimeFormat('ru', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  let wrongWordsIndex = '';
  collection.forEach((el, index) => {
    if (!wrongWords.includes(el.word.toLowerCase())) wrongWordsIndex += `${index},`;
  });
  const gameStatistic = `${formater.format(date)}-${lastRound}-${wrongWordsIndex
    .replace(/^[,\s]+|[,\s]+$/g, '')
    .replace(/,[,\s]*,/g, ',')}`;
  const roundsStatistic = Statistic[`${gameName}PassedRound`];
  let newRoundStatistics;
  if (roundsStatistic === '0') newRoundStatistics = [];
  else newRoundStatistics = roundsStatistic.split(';');
  newRoundStatistics.push(gameStatistic);
  if (newRoundStatistics.length > 10) {
    newRoundStatistics.shift();
  }
  newStatistic[`${gameName}LastRound`] = lastRound;
  newStatistic[`${gameName}PassedRound`] = newRoundStatistics.join(';');
  return newStatistic;
};

export default createGameEndData;
