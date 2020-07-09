import styled from 'styled-components';
import React, { useState } from 'react';
import { Translate } from 'react-redux-i18n';
import MainNavigationMenu from '../../../../../containers/Navigation/MainNavigationMenu';
import StyledButtonWithIcon from '../../../../UI/Button/Styled/StyledButtonWithIcon';
import iconLogout from '../../../../UI/Icon/iconLogout.svg';
import iconSettings from '../../../../UI/Icon/iconSettings.svg';
import iconLogoutHover from '../../../../UI/Icon/iconLogoutHover.svg';
import iconSettingsHover from '../../../../UI/Icon/iconSettingsHover.svg';
import getRedirectFunction from '../../../../../utils/getRedirectFunction';
import { resetSessionData } from '../../../../../redux/Auth/Login/actions';
import Logo from '../../../../UI/Logo/Logo';

const BurgerMenuContainer = styled.div`
  cursor: pointer;
  display: none;
  margin-top: 10px;

  button {
    opacity: 0;
    visibility: hidden;
    z-index: 10;
  }

  .navbar-list {
    z-index: 10;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    margin-top: -43px;
    transition: 1s all ease;
  }

  div {
    position: absolute;
  }

  input:checked ~ .navbar-list {
    opacity: 1;
    visibility: unset;
  }

  input:checked ~ .logo {
    background: white;
  }

  input:checked ~ button {
    opacity: 1;
    visibility: unset;
  }

  input:checked ~ label .one {
    opacity: 0;
    transition: 0.3s ease-in-out;
    position: fixed;
  }

  input:checked ~ label .two {
    transform: rotate(-45deg);
    margin-bottom: 0;
    transition: 0.3s all ease;
    position: fixed;
  }

  input:checked ~ label .three {
    transform: rotate(45deg);
    margin-bottom: 0;
    transition: 0.3s all ease;
    position: fixed;
  }

  input:checked ~ label .four {
    opacity: 0;
    transition: 0.3s all ease;
    position: fixed;
  }

  @media (max-width: 767px) {
    display: block;
    .navbar-list {
      display: block;
    }
    button {
      position: fixed;
      display: block;
      margin-top: 650px;
      margin-left: 17px;
    }

    button: first-of-type {
      margin-top: 600px;
    }

    button span {
      margin-left: 17px;
    }

    span {
      font-size: 21px;
      color: #ffffff;
    }
  }

  @media (max-width: 600px) {
    button {
      margin-left: -75px;
    }
  }
`;

const BurgerMenuInput = styled.input`
  display: none;
`;

const BurgerMenuLabel = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 38px;
  color: #fff;
  @media (max-width: 950px) {
    font-size: 23px;
  }
`;

const BurgerMenuFirstLine = styled.div`
  display: none;
  cursor: pointer;
  z-index: 20;
  position: absolute;
  width: 30px;
  height: 4px;
  left: 90%;
  background-color: grey;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 5px;
  @media (max-width: 767px) {
    display: block;
  }
  @media (max-width: 450px) {
    left: 83%;
  }
`;

const BurgerMenuSecondLine = styled.div`
  display: none;
  cursor: pointer;

  z-index: 20;
  left: 90%;
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: grey;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 15px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 450px) {
    left: 83%;
  }
`;

const BurgerMenuThirdLine = styled.div`
  display: none;
  cursor: pointer;

  z-index: 20;
  left: 90%;
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: grey;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 15px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 450px) {
    left: 83%;
  }
`;

const BurgerMenuFourthLine = styled.div`
  display: none;
  cursor: pointer;
  z-index: 20;
  left: 90%;
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: grey;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 25px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 450px) {
    left: 83%;
  }
`;

const BurgerMenu = (props) => {
  const { resetSessionData } = props;

  const [checkboxType, changeCheckbox] = useState(false);

  const clickHandler = () => {
    if (checkboxType === false) {
    changeCheckbox(true)
    }
  }

  const pageClose = () => {
    if (checkboxType === true) {
      changeCheckbox(false)
      }
  }
    
  return (
    <BurgerMenuContainer onChange={clickHandler} onClick={pageClose}>
      <BurgerMenuInput id="check-nav" type="checkbox" onChange={pageClose} checked={checkboxType} />
      <BurgerMenuLabel htmlFor="check-nav" onClick={pageClose}>
        <BurgerMenuFirstLine className="one" />
        <BurgerMenuSecondLine className="two" />
        <BurgerMenuThirdLine className="three" />
        <BurgerMenuFourthLine className="four" />
      </BurgerMenuLabel>
      <MainNavigationMenu />
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
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
