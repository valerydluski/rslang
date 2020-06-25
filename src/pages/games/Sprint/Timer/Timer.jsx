import React from 'react';
import TimerStyled from './TimerStyled';
import SecondsContainer from './SecondsContainer';

const Timer = () => {
  return (
    <TimerStyled>
      <div className="timer">
        <div className="spinner pie" />
        <div className="filler pie" />
        <div className="mask" />
        <SecondsContainer />
      </div>
    </TimerStyled>
  );
};

export default Timer;
