import React from 'react';
import SideBarContainer from './styled/SideBarContainer';
import UserDescription from './components/UserDescription';

export default function RightSideBar() {
  return (
    <SideBarContainer>
      <UserDescription />
    </SideBarContainer>
  );
}
