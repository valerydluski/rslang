import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SecondsContainerStyled from './SecondsContainerStyled';

const SecondsContainer = ({ initialSecondsAmount }) => {
  const [seconds, setSeconds] = useState(initialSecondsAmount);
  if (seconds) setTimeout(() => setSeconds(seconds - 1), 1000);
  return <SecondsContainerStyled>{seconds}</SecondsContainerStyled>;
};

SecondsContainer.propTypes = {
  initialSecondsAmount: PropTypes.number.isRequired,
};

export default SecondsContainer;
