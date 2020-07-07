import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { NextButtonStyled, DontKnowButtonStyled } from './Styled/StyledMakeSentenceControls';

const DontKnowButton = ({ clickHandler }) => (
  <DontKnowButtonStyled onClick={clickHandler}>
    <Translate value="Buttons.dontKnow" />
  </DontKnowButtonStyled>
);

const NextButton = ({ clickHandler }) => <NextButtonStyled onClick={clickHandler} />;

DontKnowButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

NextButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export { DontKnowButton, NextButton };
