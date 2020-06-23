import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NextIcon from '../UI/Icon/next.svg';

const NextButtonStyled = styled.div`
  background-image: url(${NextIcon});
  background-size: cover;
  border-radius: 100%;
  box-sizing: border-box;
  width: 115px;
  height: 115px;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.5s ease-in-out;
  }
`;

const DontKnowButtonStyled = styled(NextButtonStyled)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 115px;
  color: #000000;
  border: 2px solid #f56748;
  background: none;
  user-select: none;
  text-align: center;
`;

const DontKnowButton = ({ clickHandler }) => (
  <DontKnowButtonStyled onClick={clickHandler}>I don&apos;t know</DontKnowButtonStyled>
);

const NextButton = ({ clickHandler }) => <NextButtonStyled onClick={clickHandler} />;

DontKnowButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

NextButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export { DontKnowButton, NextButton };
