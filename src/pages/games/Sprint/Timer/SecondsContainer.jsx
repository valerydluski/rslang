import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SecondsContainerStyled from './SecondsContainerStyled';

const SecondsContainer = ({ initialSecondsAmount, timeIsUpHandler }) => {
  const [seconds, setSeconds] = useState(initialSecondsAmount);

  useEffect(() => {
    if (seconds === 0) {
      timeIsUpHandler();
      return undefined;
    }
    const tick = setInterval(() => {
      setSeconds((second) => second - 1);
    }, 1000);
    return () => clearInterval(tick);
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
