import React from 'react';
import SideBarContainer from './styled/SideBarContainer';
import UserDescription from './components/UserDescription';
import UserStatistics from './components/UserStatistic';
import LearnNavigationMenu from '../../../containers/Navigation/LearnNavigationMenu';

export default function RightSideBar() {
  return (
    <SideBarContainer>
      <UserDescription />
      <UserStatistics />
      <LearnNavigationMenu />
    </SideBarContainer>
  );
}
