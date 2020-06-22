import React from 'react';
import Logo from '../../../containers/UI/Logo';
import SideBarContainer from './styled/SideBarContainer';
import MainNavigationMenu from '../../../containers/Navigation/MainNavigationMenu';

export default function LeftSideBar(props) {
  return (
    <SideBarContainer>
      <Logo />
      <MainNavigationMenu />
    </SideBarContainer>
  );
}
