import newRound from './newRound';
import { GAME_NAME } from '../config';

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
  let newWordsPerPage = wordsPerPage;
  const { newLevel, newPage } = newRound(level, page, maxPage);
  const lastRound = `${level}_${page}_${newLevel}_${newPage}`;
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
  if (gameName === GAME_NAME.englishPuzzle) newWordsPerPage = 10;
  const gameStatistic = `${formater.format(date)}-${lastRound}-${correctWordsIndex
    .replace(/^[,\s]+|[,\s]+$/g, '')
    .replace(/,[,\s]*,/g, ',')}-${newWordsPerPage}`;
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
