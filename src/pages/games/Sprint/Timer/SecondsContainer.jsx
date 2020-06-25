import React, { useState } from 'react';
import SecondsContainerStyled from './SecondsContainerStyled';

const SecondsContainer = () => {
  const [seconds, setSeconds] = useState(10);
  if (seconds) setTimeout(() => setSeconds(seconds - 1), 1000);
  return <SecondsContainerStyled>{seconds}</SecondsContainerStyled>;
};

export default SecondsContainer;
