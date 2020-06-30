const createGameEndData = (level, page, collection, roundsStatistic, wrongWords) => {
  const lastRound = `${level}_${page}`;
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
  const gameStatistic = `${formater.format(date)}-${lastRound}-${wrongWordsIndex}`;
  let newStatistic;
  if (roundsStatistic === '0') newStatistic = [];
  else newStatistic = roundsStatistic.split(';');
  newStatistic.push(gameStatistic);
  if (newStatistic.length > 10) {
    newStatistic.shift();
  }
  return {
    lastRound,
    newStatistic: newStatistic.join(';'),
  };
};

export default createGameEndData;
