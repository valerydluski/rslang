import React from 'react';
import SideBarContainerRight from './styled/SideBarContainerRight';
import UserDescription from './components/UserDescription';
import UserStatistics from './components/UserStatistic';
import LearnNavigationMenu from '../../../containers/Navigation/LearnNavigationMenu';
import Title from '../../../containers/Homepage/Content/Title/Title';

export default function RightSideBar() {
  return (
    <SideBarContainerRight>
      <Title />
      <UserDescription />
      <UserStatistics />
      <LearnNavigationMenu />
    </SideBarContainerRight>
  );
}
