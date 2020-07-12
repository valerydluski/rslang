import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SecondsContainerStyled from './Styled/SecondsContainerStyled';
import timeIsUpSound from '../../assets/audio/timeIsUpSound.mp3';
import countdownSound from '../../assets/audio/countdownSound.mp3';

let countdownAudio;
const audio = new Audio();

const SecondsContainer = ({ initialSecondsAmount, timeIsUpHandler, isGameFinished }) => {
  const [seconds, setSeconds] = useState(initialSecondsAmount);

  useEffect(() => {
    const tick = setInterval(() => {
      setSeconds((second) => second - 1);
    }, 1000);
    if (seconds === 0) {
      timeIsUpHandler();
    }
    return () => {
      clearInterval(tick);
      if (countdownAudio) countdownAudio.pause();
    };
  }, [seconds]);

  if (isGameFinished) {
    if (countdownAudio) countdownAudio.pause();
    return null;
  }

  const countdownSoundStart = 5;

  const playSound = (isFinished) => {
    audio.src = isFinished ? timeIsUpSound : countdownSound;
    audio.load();
    if (seconds === countdownSoundStart) countdownAudio = audio;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch(() => {});
    }
  };

  if (seconds === 0) {
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
