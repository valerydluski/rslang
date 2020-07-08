import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { NextButtonStyled, DontKnowButtonStyled } from './styled/StyledAudiocallControls';

const DontKnowButton = ({ clickHandler }) => (
  <DontKnowButtonStyled onClick={clickHandler}>
    <Translate value="Buttons.dontKnow" />
  </DontKnowButtonStyled>
);

const NextButton = ({ switchToNextWord }) => (
  <NextButtonStyled onClick={switchToNextWord}>
    <KeyboardEventHandler handleKeys={['enter']} onKeyEvent={() => switchToNextWord()} />
  </NextButtonStyled>
);

DontKnowButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

NextButton.propTypes = {
  switchToNextWord: PropTypes.func.isRequired,
};

export { DontKnowButton, NextButton };
