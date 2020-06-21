import React from 'react';
import { useHistory } from 'react-router-dom';
import StyledGoHomeButton from '../../../components/UI/Button/Styled/StyledGoHomeButton';

const GoHomePageButton = () => {
  const history = useHistory();
  function goHome() {
    history.push('/');
  }
  return <StyledGoHomeButton type="button" onClick={goHome} />;
};

export default GoHomePageButton;
