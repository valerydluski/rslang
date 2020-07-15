import React from 'react';
import PropTypes from 'prop-types';
import WordCardSpeakIT from '../../components/WordCards/WordCardSpeakIT';
import CardsContainerSpeakITStyled from './Styled/CardsContainerSpeakITStyled';

const CardsContainerSpeakIT = (props) => {
  const { wordsCollection, cardHandler, correctWords, hiddenIcon } = props;
  const addClass = (word) => {
    if (correctWords.includes(word.toLowerCase())) return 'spoken-word';
    return '';
  };
  return (
    <CardsContainerSpeakITStyled>
      {wordsCollection.map((word) => {
        return (
          <WordCardSpeakIT
            key={word.word.toLowerCase()}
            id={word.word.toLowerCase()}
            className={addClass(word.word)}
            obj={word}
            wordCardHandler={cardHandler}
            hiddenIcon={hiddenIcon}
          />
        );
      })}
    </CardsContainerSpeakITStyled>
  );
};

CardsContainerSpeakIT.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  cardHandler: PropTypes.func,
  correctWords: PropTypes.instanceOf(Array),
  hiddenIcon: PropTypes.bool,
};

CardsContainerSpeakIT.defaultProps = {
  wordsCollection: [],
  cardHandler: () => {},
  correctWords: [],
  hiddenIcon: false,
};

export default CardsContainerSpeakIT;
