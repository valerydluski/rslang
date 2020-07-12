import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CorrectCheckmark from '../../UI/Icon/checkmark.svg';
import { DEVICE } from '../../../config';

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
  white-space: nowrap;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    transition: background-color 0.4s ease-in-out;
  }
  box-sizing: border-box;

  @media ${DEVICE.laptopL} {
    font-size: 20px;
    white-space: normal;
  }

  @media ${DEVICE.tablet} {
    font-size: 26px;
    padding: 6px 30px;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

const FinishedWordStyled = styled(WordStyled)`
  color: #7d7d7d;
`;

const WrongWordStyled = styled(FinishedWordStyled)`
  color: #f56748;
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
      return <FinishedWordStyled>{`${index + 1}. ${translation}`}</FinishedWordStyled>;
    case 'wrong':
      return <WrongWordStyled>{`${index + 1}. ${translation}`}</WrongWordStyled>;
    case 'correct':
      return <CorrectWordStyled>{`${index + 1}. ${translation}`}</CorrectWordStyled>;
    default:
      return <WordStyled data-index={index}>{`${index + 1}. ${translation}`}</WordStyled>;
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
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Word;
