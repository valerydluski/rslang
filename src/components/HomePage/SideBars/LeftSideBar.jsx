import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import Logo from '../../../containers/UI/Logo';
import SideBarContainer from './styled/SideBarContainer';
import MenuContainer from './styled/MenuContainer';
import MainNavigationMenu from '../../../containers/Navigation/MainNavigationMenu';
import StyledButtonWithIcon from '../../UI/Button/Styled/StyledButtonWithIcon';
import iconLogout from '../../UI/Icon/iconLogout.svg';
import iconLogoutHover from '../../UI/Icon/iconLogoutHover.svg';
import iconLogoutTablet from '../../UI/Icon/iconLogoutTablet.svg';
import iconSettings from '../../UI/Icon/iconSettings.svg';
import iconSettingsTablet from '../../UI/Icon/iconSettingsTablet.svg';
import iconSettingsHover from '../../UI/Icon/iconSettingsHover.svg';
import getRedirectFunction from '../../../utils/getRedirectFunction';
import Burger from '../../UI/Burger/Burger';

export default function LeftSideBar(props) {
  const { resetSessionData, resetStore } = props;

  const [isMenuOpen, changeMenuStatus] = useState(false);

  const toggleMenu = () => {
    changeMenuStatus(!isMenuOpen);
  };

  const closeMenu = () => {
    changeMenuStatus(false);
  };

  const logoutHandler = () => {
    resetSessionData();
    resetStore();
  };

  return (
    <SideBarContainer>
      <Logo isOpen={isMenuOpen} />
      <Burger clickHandler={toggleMenu} isOpen={isMenuOpen} />
      <MenuContainer isOpen={isMenuOpen} onClick={closeMenu}>
        <MainNavigationMenu onClick={closeMenu} />
        <StyledButtonWithIcon
          icon={iconSettings}
          iconTablet={iconSettingsTablet}
          iconHover={iconSettingsHover}
          onClick={getRedirectFunction('/settings')}
        >
          <Translate value="HomePage.settings" />
        </StyledButtonWithIcon>
        <StyledButtonWithIcon
          icon={iconLogout}
          iconTablet={iconLogoutTablet}
          iconHover={iconLogoutHover}
          onClick={logoutHandler}
        >
          <Translate value="HomePage.logout" />
        </StyledButtonWithIcon>
      </MenuContainer>
    </SideBarContainer>
  );
}

LeftSideBar.propTypes = {
  resetSessionData: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
};
