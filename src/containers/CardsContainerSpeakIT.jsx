import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import WordCardSpeakIT from '../components/WordCards/WordCardSpeakIT';

const CardsContainerSpeakITStyled = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'word word word word word'
    'word word word word word';
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  width: 80%;
`;

const CardsContainerSpeakIT = (props) => {
  const { wordsCollection, cardHandler } = props;
  return (
    <CardsContainerSpeakITStyled>
      {wordsCollection.map((word) => {
        return <WordCardSpeakIT key={word.word} obj={word} wordCardHandler={cardHandler} />;
      })}
    </CardsContainerSpeakITStyled>
  );
};

CardsContainerSpeakIT.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  cardHandler: PropTypes.func,
};

CardsContainerSpeakIT.defaultProps = {
  wordsCollection: [],
  cardHandler: () => {},
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
  };
};

export default connect(mapStateToProps, null)(CardsContainerSpeakIT);
