import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CorrectCheckmark from '../../../components/UI/Icon/checkmark.svg';

const WordStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  color: black;
  cursor: pointer;
  padding: 12px 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    transition: background-color 0.4s ease-in-out;
  }
`;

const FinishedWordStyled = styled(WordStyled)`
  color: #c4c4c4;
`;

const WrongWordStyled = styled(FinishedWordStyled)`
  text-decoration: line-through;
`;

const CorrectWordStyled = styled(WordStyled)`
  position: relative;
  &:before {
    content: url(${CorrectCheckmark});
    margin-right: 5px;
    position: absolute;
    left: 5px;
  }
`;

const Word = ({ translation, wordStyleType, index }) => {
  switch (wordStyleType) {
    case 'finished':
      return <FinishedWordStyled>{translation}</FinishedWordStyled>;
    case 'wrong':
      return <WrongWordStyled>{translation}</WrongWordStyled>;
    case 'correct':
      return <CorrectWordStyled>{translation}</CorrectWordStyled>;
    default:
      return <WordStyled data-index={index}>{translation}</WordStyled>;
  }
};

Word.defaultProps = {
  translation: '',
  wordStyleType: '',
  index: '',
};

Word.propTypes = {
  translation: PropTypes.string,
  wordStyleType: PropTypes.string,
  index: PropTypes.string,
};

export default Word;
