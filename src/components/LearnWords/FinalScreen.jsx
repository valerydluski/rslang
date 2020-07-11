import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import FinalScreenContainer from './styled/FinalScreenContainer';
import ResultAnimation from './Animation/ResultAnimation';
import ResultItem from './styled/ResultItem';
import GoToHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';

export default function FinalScreen(props) {
  const { noWords, wordsCount, newWordCount, rightAnswer, longestSeries } = props;
  const percent = Math.round((rightAnswer / wordsCount) * 100);
  const correctWordsClass = percent > 50 ? 'correct' : 'incorrect';
  const values = [
    {
      dimension: 'LearnWords.cardsShowed',
      value: wordsCount,
    },
    {
      dimension: 'LearnWords.correctWords',
      value: `${percent} %`,
    },
    {
      dimension: 'LearnWords.newWords',
      value: newWordCount,
    },
    {
      dimension: 'LearnWords.theLongestSeries',
      value: longestSeries,
    },
  ];
  return (
    <FinalScreenContainer>
      <GoToHomePageButton />
      <ResultAnimation />
      <h2>
        <Translate value={noWords ? 'LearnWords.noWords' : 'LearnWords.completed'} />
      </h2>
      {!noWords
        ? values.map((item) => (
            <ResultItem key={item.dimension}>
              <Translate
                className={
                  item.dimension === 'LearnWords.correctWords' ? correctWordsClass : 'dimension'
                }
                value={item.dimension}
              />
              <span className="value">{item.value}</span>
            </ResultItem>
          ))
        : null}
    </FinalScreenContainer>
  );
}

FinalScreen.propTypes = {
  noWords: PropTypes.bool,
  wordsCount: PropTypes.number,
  newWordCount: PropTypes.number,
  rightAnswer: PropTypes.number,
  longestSeries: PropTypes.number,
};

FinalScreen.defaultProps = {
  noWords: false,
  wordsCount: 0,
  newWordCount: 0,
  rightAnswer: 0,
  longestSeries: 0,
};
