const createGameEndData = (level, page, collection, passedRound, correctWords) => {
  console.log('createGameEndData -> collection', collection, passedRound, correctWords);
  const lastRound = `${level}_${page}`;
  const date = new Date();
  const formater = new Intl.DateTimeFormat('ru', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  const gameStatistic = `${formater.format(date)}-${lastRound}`;
  return {
    lastRound,
    gameStatistic,
  };
};

export default createGameEndData;
