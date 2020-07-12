import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import { TrueButtonStyled, FalseButtonStyled } from './Styled/AnswerButtonsStyled';
import ControlContainerStyled from './Styled/ControlContainerStyled';
import errorSound from '../../assets/audio/error.mp3';
import correctSound from '../../assets/audio/correct.mp3';
import SprintResultMarker from '../../components/Sprint/SprintResultMarker';

const resultAudio = new Audio();

const SprintControlsContainer = ({ processAnswer, isAnswerCorrect, isWordFinished }) => {
  useEffect(() => {
    resultAudio.pause();
  }, []);
  const playResultSound = (isOk) => {
    resultAudio.src = isOk ? correctSound : errorSound;
    resultAudio.load();
    const playPromise = resultAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch(() => {});
    }
  };

  if (isWordFinished) playResultSound(isAnswerCorrect);

  return (
    <ControlContainerStyled>
      {isWordFinished ? (
        <SprintResultMarker key={new Date()} isAnswerCorrect={isAnswerCorrect} />
      ) : null}
      <FalseButtonStyled onClick={() => processAnswer(false)}>
        <Translate value="Buttons.false" />
      </FalseButtonStyled>
      <TrueButtonStyled onClick={() => processAnswer(true)}>
        <Translate value="Buttons.true" />
      </TrueButtonStyled>
    </ControlContainerStyled>
  );
};

SprintControlsContainer.propTypes = {
  isAnswerCorrect: PropTypes.bool,
  processAnswer: PropTypes.func,
  isWordFinished: PropTypes.bool,
};

SprintControlsContainer.defaultProps = {
  isAnswerCorrect: false,
  processAnswer: () => {},
  isWordFinished: false,
};

export default SprintControlsContainer;
