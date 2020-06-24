import React from 'react';
import Logo from '../../../containers/UI/Logo';
import SideBarContainer from './styled/SideBarContainer';
import MainNavigationMenu from '../../../containers/Navigation/MainNavigationMenu';
import StyledButtonWithIcon from '../../UI/Button/Styled/StyledButtonWithIcon';
import iconLogout from '../../UI/Icon/iconLogout.svg';
import iconSettings from '../../UI/Icon/iconSettings.svg';
import iconLogoutHover from '../../UI/Icon/iconLogoutHover.svg';
import iconSettingsHover from '../../UI/Icon/iconSettingsHover.svg';

export default function LeftSideBar() {
  return (
    <SideBarContainer>
      <Logo />
      <MainNavigationMenu />
      <div>
        <StyledButtonWithIcon icon={iconSettings} iconHover={iconSettingsHover}>
          Settings
        </StyledButtonWithIcon>
        <StyledButtonWithIcon icon={iconLogout} iconHover={iconLogoutHover}>
          Log Out
        </StyledButtonWithIcon>
      </div>
    </SideBarContainer>
  );
}
