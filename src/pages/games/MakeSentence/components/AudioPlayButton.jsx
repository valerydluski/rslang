import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ActiveAudioPlayButtonStyled,
  AudioPlayButtonStyled,
} from '../Styled/AudioPlayButtonsStyled';

const audio = new Audio();

const AudioPlayButton = ({ audioSrc }) => {
  const [isAudioActive, toggleAudioMode] = useState(false);

  const playAudio = () => {
    audio.src = audioSrc;
    audio.load();
    audio.play();
    toggleAudioMode(true);
    audio.onended = () => toggleAudioMode(false);
  };

  const pauseAudio = () => {
    audio.pause();
    toggleAudioMode(false);
  };

  if (isAudioActive) return <ActiveAudioPlayButtonStyled onClick={pauseAudio} />;
  return <AudioPlayButtonStyled onClick={playAudio} />;
};

AudioPlayButton.propTypes = {
  audioSrc: PropTypes.string,
};

AudioPlayButton.defaultProps = {
  audioSrc: '',
};

export default AudioPlayButton;
