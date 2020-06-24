import React from 'react';
import PropTypes from 'prop-types';
import { NextButtonStyled, DontKnowButtonStyled } from './styled/StyledAudiocallControls';

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
