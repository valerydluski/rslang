import React from 'react';
import styled from 'styled-components';
import Logo from '../../containers/UI/Logo';

const SideBarContainer = styled.div`
  display: flex;
`;

export default function LeftSideBar(props) {
  return (
    <SideBarContainer>
      <Logo />
    </SideBarContainer>
  );
}
