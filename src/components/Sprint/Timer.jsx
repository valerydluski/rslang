import React from 'react';
import PropTypes from 'prop-types';
import TimerStyled from './Styled/TimerStyled';
import SecondsContainer from '../../containers/Sprint/SecondsContainer';

const Timer = ({ initialTime, finishGameHandler, isGameFinished }) => {
  return (
    <TimerStyled animationDuration={initialTime}>
      <div className="timer">
        <div className="spinner pie" />
        <div className="filler pie" />
        <div className="mask" />
        <SecondsContainer
          initialSecondsAmount={initialTime}
          finishGameHandler={finishGameHandler}
          isGameFinished={isGameFinished}
        />
      </div>
    </TimerStyled>
  );
};

Timer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  finishGameHandler: PropTypes.func,
  isGameFinished: PropTypes.bool,
};

Timer.defaultProps = {
  finishGameHandler: () => {},
  isGameFinished: false,
};

export default Timer;
