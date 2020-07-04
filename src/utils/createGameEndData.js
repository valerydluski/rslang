import newRound from './newRound';

const createGameEndData = (
  level,
  page,
  collection,
  Statistic,
  wrongWords,
  gameName,
  wordsPerPage,
  maxPage
) => {
  const { newLevel, newPage } = newRound(level, page, maxPage);
  const lastRound = `${newLevel}_${newPage}`;
  const newStatistic = Statistic;
  const date = new Date();
  const formater = new Intl.DateTimeFormat('ru', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  let correctWordsIndex = '';
  if (wrongWords) {
    const wrongWordsLowerCase = wrongWords.map((el) => el.toLowerCase());
    collection.forEach((el, index) => {
      if (!wrongWordsLowerCase.includes(el.word.toLowerCase())) correctWordsIndex += `${index},`;
    });
  } else {
    collection.forEach((el, index) => {
      correctWordsIndex += `${index},`;
    });
  }
  const gameStatistic = `${formater.format(date)}-${lastRound}-${correctWordsIndex
    .replace(/^[,\s]+|[,\s]+$/g, '')
    .replace(/,[,\s]*,/g, ',')}-${wordsPerPage}`;
  const roundsStatistic = newStatistic[`${gameName}PassedRound`];
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
