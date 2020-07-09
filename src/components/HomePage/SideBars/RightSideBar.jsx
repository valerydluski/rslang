import React from 'react';
import SideBarContainerRight from './styled/SideBarContainerRight';
import UserDescription from './components/UserDescription';
import LearnNavigationMenu from '../../../containers/Navigation/LearnNavigationMenu';

export default function RightSideBar() {
  return (
    <SideBarContainerRight>
      <UserDescription />
      <LearnNavigationMenu />
    </SideBarContainerRight>
  );
}
