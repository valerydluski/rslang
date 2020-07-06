const createLearnWordsStatistic = (statistic, learnData, repeatWordsToday) => {
  const newStatistic = statistic;
  const { nextWord, nextLevel, cardsShow, countNewWordsShow, lastDateTraining } = learnData;
  newStatistic.LearnLastWords = nextWord;
  newStatistic.LearnLastLevel = nextLevel;
  newStatistic.CountCardsShow = cardsShow;
  newStatistic.CountNewWordsToday = countNewWordsShow;
  newStatistic.lastTrain = lastDateTraining;
  newStatistic.RepeatWordsToday = JSON.stringify(
    repeatWordsToday.filter((word) => !word.isNew).map((word) => word.word)
  );
  return newStatistic;
};

export default createLearnWordsStatistic;
