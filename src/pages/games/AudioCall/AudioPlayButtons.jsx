import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AudioPlayButtonStyled, BigAudioPlayButtonStyled } from './StyledAudioButtons';

const AudioPlayButton = ({ src, isBig }) => {
  const wordAudio = new Audio();
  const link = 'https://raw.githubusercontent.com/kovanelly/rslang-data/master/';
  wordAudio.src = `${link}${src}`;
  const playWordAudio = () => {
    wordAudio.play();
  };

  useEffect(() => {
    if (isBig) playWordAudio();
  });

  return isBig ? (
    <BigAudioPlayButtonStyled onClick={playWordAudio} />
  ) : (
    <AudioPlayButtonStyled onClick={playWordAudio} />
  );
};

AudioPlayButton.defaultProps = {
  src: '',
  isBig: false,
};

AudioPlayButton.propTypes = {
  src: PropTypes.string,
  isBig: PropTypes.bool,
};

export default AudioPlayButton;
