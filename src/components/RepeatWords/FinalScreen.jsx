import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import FinalScreenContainer from './styled/FinalScreenContainer';
import ResultAnimation from './Animation/ResultAnimation';
import ResultItem from './styled/ResultItem';
import GoToHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';

export default function FinalScreen(props) {
  const { noWords, wordsCount, isMoreCardsToday } = props;

  const values = [
    {
      dimension: 'LearnWords.cardsShowed',
      value: wordsCount,
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
              <Translate className="correct" value={item.dimension} />
              <span className="value">{item.value}</span>
            </ResultItem>
          ))
        : null}
      {isMoreCardsToday && <Translate className="description" value="RepeatWords.more" />}
    </FinalScreenContainer>
    // <>
    //   {noWords ? <TextField text="Нету больше слов" /> : <TextField text={str} />}
    //   {isMoreCardsToday && <TextField text="Ещё есть карточки" />}
    // </>
  );
}

FinalScreen.propTypes = {
  noWords: PropTypes.bool,
  wordsCount: PropTypes.number,
  isMoreCardsToday: PropTypes.bool,
};

FinalScreen.defaultProps = {
  noWords: false,
  wordsCount: 0,
  isMoreCardsToday: false,
};
