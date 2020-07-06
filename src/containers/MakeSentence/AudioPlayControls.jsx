import React, { useState } from 'react';
import Sound from 'react-sound';
import PropTypes from 'prop-types';
import {
  ActiveAudioPlayButtonStyled,
  AudioPlayButtonStyled,
  SlowAudioPlayButtonStyled,
  ActiveSlowAudioPlayButtonStyled,
} from './Styled/AudioPlayButtonsStyled';

const AudioPlayControls = ({ audioSrc }) => {
  const [isAudioActive, toggleAudioMode] = useState(false);
  const [isSlowAudioActive, toggleSlowAudioMode] = useState(false);
  return (
    <>
      {isAudioActive ? (
        <ActiveAudioPlayButtonStyled onClick={() => toggleAudioMode(false)}>
          <Sound
            url={audioSrc}
            playStatus={Sound.status.PLAYING}
            playbackRate={1}
            onFinishedPlaying={() => toggleAudioMode(false)}
          />
        </ActiveAudioPlayButtonStyled>
      ) : (
        <AudioPlayButtonStyled
          onClick={() => {
            toggleAudioMode(true);
            if (isSlowAudioActive) toggleSlowAudioMode(false);
          }}
        />
      )}
      {isSlowAudioActive ? (
        <ActiveSlowAudioPlayButtonStyled onClick={() => toggleSlowAudioMode(false)}>
          <Sound
            url={audioSrc}
            playStatus={Sound.status.PLAYING}
            playbackRate={0.6}
            onFinishedPlaying={() => toggleSlowAudioMode(false)}
          />
        </ActiveSlowAudioPlayButtonStyled>
      ) : (
        <SlowAudioPlayButtonStyled
          onClick={() => {
            toggleSlowAudioMode(true);
            if (isAudioActive) toggleAudioMode(false);
          }}
        />
      )}
    </>
  );
};

AudioPlayControls.propTypes = {
  audioSrc: PropTypes.string,
};

AudioPlayControls.defaultProps = {
  audioSrc: '',
};

export default AudioPlayControls;
