import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import SecondsContainerStyled from './Styled/SecondsContainerStyled';
import timeIsUpSound from '../../assets/audio/timeIsUpSound.mp3';
import countdownSound from '../../assets/audio/countdownSound.mp3';

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
    };
  }, [seconds, timeIsUpHandler]);

  if (isGameFinished) {
    return null;
  }

  return (
    <SecondsContainerStyled>
      <>{seconds}</>
      {seconds === 1 ? <Sound url={timeIsUpSound} playStatus={Sound.status.PLAYING} /> : null}
      {seconds < 5 && seconds > 1 ? (
        <Sound url={countdownSound} playStatus={Sound.status.PLAYING} />
      ) : null}
    </SecondsContainerStyled>
  );
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
