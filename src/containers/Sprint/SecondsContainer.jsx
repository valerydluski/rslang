import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SecondsContainerStyled from './Styled/SecondsContainerStyled';
import timeIsUpSound from '../../assets/audio/timeIsUpSound.mp3';
import countdownSound from '../../assets/audio/countdownSound.mp3';

let countdownAudio;

const SecondsContainer = ({ initialSecondsAmount, timeIsUpHandler, isGameFinished }) => {
  const [seconds, setSeconds] = useState(initialSecondsAmount);

  useEffect(() => {
    const tick = setInterval(() => {
      setSeconds((second) => second - 1);
    }, 1000);
    return () => {
      clearInterval(tick);
    };
  });

  if (isGameFinished) {
    if (countdownAudio) countdownAudio.pause();
    return null;
  }

  const audio = new Audio();
  const countdownSoundStart = 5;

  const playSound = (isFinished) => {
    audio.src = isFinished ? timeIsUpSound : countdownSound;
    if (seconds === countdownSoundStart) countdownAudio = audio;
    audio.play();
  };

  if (seconds === 0) {
    audio.pause();
    timeIsUpHandler();
    return null;
  }
  if (seconds === 1) {
    playSound(true);
  }
  if (seconds === 5) {
    playSound();
  }

  return <SecondsContainerStyled>{seconds}</SecondsContainerStyled>;
};

SecondsContainer.propTypes = {
  initialSecondsAmount: PropTypes.number.isRequired,
  timeIsUpHandler: PropTypes.func,
  isGameFinished: PropTypes.bool,
};

SecondsContainer.defaultProps = {
  timeIsUpHandler: () => {},
  isGameFinished: false,
};

export default SecondsContainer;
