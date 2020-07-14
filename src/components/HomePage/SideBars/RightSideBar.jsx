import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBarContainerRight from './styled/SideBarContainerRight';
import UserDescription from './components/UserDescription';
import UserStatistics from './components/UserStatistic';
import LearnNavigationMenu from '../../../containers/Navigation/LearnNavigationMenu';
import Title from '../../../containers/Homepage/Content/Title/Title';

export default function RightSideBar() {
  const location = useLocation();
  return (
    <SideBarContainerRight pathName={location.pathname}>
      <Title />
      <UserDescription />
      <UserStatistics />
      <LearnNavigationMenu />
    </SideBarContainerRight>
  );
}
