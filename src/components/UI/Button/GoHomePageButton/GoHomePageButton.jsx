import React from 'react';
import { useHistory } from 'react-router-dom';
import StyledGoHomeButton from './StyledGoHomeButton';

const GoHomePageButton = () => {
  const history = useHistory();
  function goHome() {
    history.push('/');
  }
  return <StyledGoHomeButton type="button" className="exitGameButton" onClick={goHome} />;
};

export default GoHomePageButton;
