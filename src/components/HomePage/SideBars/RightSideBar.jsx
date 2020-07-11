import React from 'react';
import SideBarContainerRight from './styled/SideBarContainerRight';
import UserDescription from './components/UserDescription';
import UserStatistics from './components/UserStatistic';
import LearnNavigationMenu from '../../../containers/Navigation/LearnNavigationMenu';

export default function RightSideBar() {
  return (
    <SideBarContainerRight>
      <UserDescription />
      <UserStatistics />
      <LearnNavigationMenu />
    </SideBarContainerRight>
  );
}
