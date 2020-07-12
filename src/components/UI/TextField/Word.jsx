import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../../../config';

const WordStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25.569px;
  line-height: 31px;

  @media ${DEVICE.laptopL} {
    font-size: 20px;
  }
  &.spoken-word {
    color: #b2b2b2;
  }
`;

const Word = (props) => {
  const { word, className } = props;
  return <WordStyled className={className}>{word}</WordStyled>;
};

Word.propTypes = {
  word: PropTypes.string,
  className: PropTypes.string,
};

Word.defaultProps = {
  word: '',
  className: '',
};

export default Word;
