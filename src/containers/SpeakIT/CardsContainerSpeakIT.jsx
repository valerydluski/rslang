import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WordCardSpeakIT from '../../components/WordCards/WordCardSpeakIT';

const CardsContainerSpeakITStyled = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'word word word word word'
    'word word word word word';
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  width: 80%;
  justify-items: center;
`;

const CardsContainerSpeakIT = (props) => {
  const { wordsCollection, cardHandler, wrongWords } = props;
  const addClass = (word) => {
    if (!wrongWords.includes(word.toLowerCase())) return 'spoken-word';
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
          />
        );
      })}
    </CardsContainerSpeakITStyled>
  );
};

CardsContainerSpeakIT.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  cardHandler: PropTypes.func,
  wrongWords: PropTypes.instanceOf(Array),
};

CardsContainerSpeakIT.defaultProps = {
  wordsCollection: [],
  cardHandler: () => {},
  wrongWords: [],
};

export default CardsContainerSpeakIT;
