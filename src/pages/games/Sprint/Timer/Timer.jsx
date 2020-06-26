import React from 'react';
import PropTypes from 'prop-types';
import TimerStyled from './TimerStyled';
import SecondsContainer from './SecondsContainer';

const Timer = ({ initialTime }) => {
  return (
    <TimerStyled animationDuration={initialTime}>
      <div className="timer">
        <div className="spinner pie" />
        <div className="filler pie" />
        <div className="mask" />
        <SecondsContainer initialSecondsAmount={initialTime} />
      </div>
    </TimerStyled>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.number.isRequired,
};

export default Timer;
