import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SecondsContainerStyled from './Styled/SecondsContainerStyled';
import timeIsUpSound from '../../assets/audio/timeIsUpSound.mp3';
import countdownSound from '../../assets/audio/countdownSound.mp3';

const SecondsContainer = ({ initialSecondsAmount, timeIsUpHandler }) => {
  const [seconds, setSeconds] = useState(initialSecondsAmount);

  const audio = new Audio();

  const playSound = (isFinished) => {
    audio.src = isFinished ? timeIsUpSound : countdownSound;
    audio.play();
  };

  useEffect(() => {
    if (seconds === 0) {
      timeIsUpHandler();
      return undefined;
    }
    if (seconds === 1) {
      playSound(true);
    }
    if (seconds === 5) {
      playSound();
    }
    const tick = setInterval(() => {
      setSeconds((second) => second - 1);
    }, 1000);
    return () => {
      clearInterval(tick);
      audio.pause();
    };
  });

  return <SecondsContainerStyled>{seconds}</SecondsContainerStyled>;
};

SecondsContainer.propTypes = {
  initialSecondsAmount: PropTypes.number.isRequired,
  timeIsUpHandler: PropTypes.func,
};

SecondsContainer.defaultProps = {
  timeIsUpHandler: () => {},
};

export default SecondsContainer;
