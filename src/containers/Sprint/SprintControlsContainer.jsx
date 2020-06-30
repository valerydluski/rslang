import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { TrueButtonStyled, FalseButtonStyled } from './Styled/AnswerButtonsStyled';
import ControlContainerStyled from './Styled/ControlContainerStyled';
import errorSound from '../../assets/audio/error.mp3';
import correctSound from '../../assets/audio/correct.mp3';
import SprintResultMarker from '../../components/Sprint/SprintResultMarker';

const SprintControlsContainer = ({ clickHandler, isAnswerCorrect, isWordFinished }) => {
  const resultAudio = new Audio();

  const playResultSound = (isOk) => {
    resultAudio.src = isOk ? correctSound : errorSound;
    resultAudio.load();
    resultAudio.play();
  };

  if (isWordFinished) playResultSound(isAnswerCorrect);

  return (
    <ControlContainerStyled>
      {isWordFinished ? <SprintResultMarker isAnswerCorrect={isAnswerCorrect} /> : null}
      <FalseButtonStyled onClick={() => clickHandler(false)}>
        <Translate value="Buttons.false" />
      </FalseButtonStyled>
      <TrueButtonStyled onClick={() => clickHandler(true)}>
        <Translate value="Buttons.true" />
      </TrueButtonStyled>
    </ControlContainerStyled>
  );
};

SprintControlsContainer.propTypes = {
  isAnswerCorrect: PropTypes.bool,
  clickHandler: PropTypes.func,
  isWordFinished: PropTypes.bool,
};

SprintControlsContainer.defaultProps = {
  isAnswerCorrect: false,
  clickHandler: () => {},
  isWordFinished: false,
};

export default SprintControlsContainer;
