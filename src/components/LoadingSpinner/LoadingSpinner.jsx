import React from 'react';
import { LoadingSpinnerContainerStyled, LoadingSpinnerStyled } from './LoadingSpinnerStyled';

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainerStyled>
      <LoadingSpinnerStyled>
        <div />
        <div />
        <div />
        <div />
      </LoadingSpinnerStyled>
    </LoadingSpinnerContainerStyled>
  );
};

export default LoadingSpinner;
