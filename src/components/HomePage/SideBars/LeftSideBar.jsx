import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import Logo from '../../../containers/UI/Logo';
import SideBarContainer from './styled/SideBarContainer';
import MainNavigationMenu from '../../../containers/Navigation/MainNavigationMenu';
import StyledButtonWithIcon from '../../UI/Button/Styled/StyledButtonWithIcon';
import iconLogout from '../../UI/Icon/iconLogout.svg';
import iconSettings from '../../UI/Icon/iconSettings.svg';
import iconLogoutHover from '../../UI/Icon/iconLogoutHover.svg';
import iconSettingsHover from '../../UI/Icon/iconSettingsHover.svg';
import getRedirectFunction from '../../../utils/getRedirectFunction';
import BurgerMenu from '../SideBars/components/styled/BurgerMenuContainer'

export default function LeftSideBar(props) {
  const { resetSessionData } = props;
  return (
    <SideBarContainer>
      <Logo/>
      <BurgerMenu />
      <MainNavigationMenu />
      <div>
        <StyledButtonWithIcon
          icon={iconSettings}
          iconHover={iconSettingsHover}
          onClick={getRedirectFunction('/settings')}
        >
          <Translate value="HomePage.settings" />
        </StyledButtonWithIcon>
        <StyledButtonWithIcon
          icon={iconLogout}
          iconHover={iconLogoutHover}
          onClick={resetSessionData}
        >
          <Translate value="HomePage.logout" />
        </StyledButtonWithIcon>
      </div>
    </SideBarContainer>
  );
}

LeftSideBar.propTypes = {
  resetSessionData: PropTypes.func.isRequired,
};
