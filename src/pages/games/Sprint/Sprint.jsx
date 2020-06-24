import React from 'react';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import SprintContainerStyled from './Styled/SprintContainerStyled';
import SprintGameContainer from './Containers/SprintGameContainer';

const Sprint = () => (
  <SprintContainerStyled>
    <GoToHomePageButton />
    <SprintGameContainer />
  </SprintContainerStyled>
);

export default Sprint;
