import React from 'react';
import { TrueButtonStyled, FalseButtonStyled } from '../Styled/AnswerButtonsStyled';
import ControlContainerStyled from '../Styled/ControlContainerStyled';

const SprintControlsContainer = () => {
  const buttonTrueText = 'true';
  const buttonFalseText = 'false';

  return (
    <ControlContainerStyled>
      <FalseButtonStyled>{buttonTrueText}</FalseButtonStyled>
      <TrueButtonStyled>{buttonFalseText}</TrueButtonStyled>
    </ControlContainerStyled>
  );
};

export default SprintControlsContainer;
