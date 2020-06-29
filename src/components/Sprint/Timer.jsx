import React from 'react';
import PropTypes from 'prop-types';
import TimerStyled from './Styled/TimerStyled';
import SecondsContainer from '../../containers/Sprint/SecondsContainer';

const Timer = ({ initialTime, timeIsUpHandler, isGameFinished }) => {
  return (
    <TimerStyled animationDuration={initialTime}>
      <div className="timer">
        <div className="spinner pie" />
        <div className="filler pie" />
        <div className="mask" />
        <SecondsContainer
          initialSecondsAmount={initialTime}
          timeIsUpHandler={timeIsUpHandler}
          isGameFinished={isGameFinished}
        />
      </div>
    </TimerStyled>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  timeIsUpHandler: PropTypes.func,
  isGameFinished: PropTypes.bool,
};

Timer.defaultProps = {
  timeIsUpHandler: () => {},
  isGameFinished: false,
};

export default Timer;