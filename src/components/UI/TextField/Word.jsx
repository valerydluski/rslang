import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WordStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25.569px;
  line-height: 31px;
`;

const Word = (props) => {
  const { word } = props;
  return <WordStyled>{word}</WordStyled>;
};

Word.propTypes = {
  word: PropTypes.string,
};

Word.defaultProps = {
  word: '',
};

export default Word;
