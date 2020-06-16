import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WordCardSpeakITStyled = styled.img`
  display: grid;
  grid-template-areas:
    'button word'
    'button word';
`;

const WordCardSpeakIT = (props) => {
  const { word } = props;
  return <WordCardSpeakITStyled>{word}</WordCardSpeakITStyled>;
};

WordCardSpeakIT.propTypes = {
  word: PropTypes.objectOf,
};

WordCardSpeakIT.defaultProps = {
  word: {},
};

export default WordCardSpeakIT;
