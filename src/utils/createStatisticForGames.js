const createStatisticForGame = (str) => {
  const arr = str.split(';').map((el) => el.split('-'));
  return arr;
};
export default createStatisticForGame;
