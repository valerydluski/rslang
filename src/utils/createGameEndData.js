const createGameEndData = (level, page) => {
  const lastRound = `${level}_${page}`;
  return {
    lastRound,
  };
};

export default createGameEndData;
