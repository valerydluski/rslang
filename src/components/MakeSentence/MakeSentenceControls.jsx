import React from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Translate } from 'react-redux-i18n';
import {
  NextButtonStyled,
  DontKnowButtonStyled,
  CheckButtonStyled,
} from './Styled/StyledMakeSentenceControls';

const DontKnowButton = ({ clickHandler }) => (
  <DontKnowButtonStyled onClick={clickHandler}>
    <Translate value="Buttons.dontKnow" />
  </DontKnowButtonStyled>
);

const NextButton = ({ switchToNextSentence }) => (
  <NextButtonStyled onClick={switchToNextSentence}>
    <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={() => switchToNextSentence()} />
  </NextButtonStyled>
);

const CheckButton = ({ checkSentence }) => (
  <CheckButtonStyled onClick={checkSentence}>
    <Translate value="Buttons.check" />
    <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={() => checkSentence()} />
  </CheckButtonStyled>
);

DontKnowButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

NextButton.propTypes = {
  switchToNextSentence: PropTypes.func.isRequired,
};

CheckButton.propTypes = {
  checkSentence: PropTypes.func.isRequired,
};

export { DontKnowButton, NextButton, CheckButton };
