import React from 'react';
import SideBarContainer from './styled/SideBarContainer';
import UserDescription from './components/UserDescription';
import LearnNavigationMenu from '../../../containers/Navigation/LearnNavigationMenu';

export default function RightSideBar() {
  return (
    <SideBarContainer>
      <UserDescription />
      <LearnNavigationMenu />
    </SideBarContainer>
  );
}
