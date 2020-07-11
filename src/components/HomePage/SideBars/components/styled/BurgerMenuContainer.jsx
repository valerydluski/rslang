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
    background-color: #FFFFFF;
  }

  input:checked ~ label .three {
    transform: rotate(45deg);
    margin-bottom: 0;
    transition: 0.3s all ease;
    position: fixed;
    background-color: #FFFFFF;
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
      margin-top: 88vh;
      margin-left: 17px;
    }

    button: first-of-type {
      margin-top: 80vh;
    }

    button span {
      margin-left: 28px;
    }

    span {
      font-size: 21px;
      color: #ffffff;
    }
  }

  @media (max-width: 600px) {
    button {
      margin-left: -83px;
    }
  }

  @media (max-height: 600px) {
    button {
      margin-top: 77vh;
    }

    button: first-of-type {
      margin-top: 68vh;
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
  background-color: #6550de;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 5px;
  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 620px) {
    left: 89%;
  }

  @media (max-width: 530px) {
    left: 87%;
  }

  @media (max-width: 460px) {
    left: 84%;
  }

  @media (max-width: 320px) {
    left: 83%;
  }
`;

const BurgerMenuFirstLineSmall = styled.div`
  display: none;
  cursor: pointer;
  z-index: 20;
  position: absolute;
  width: 5px;
  height: 4px;
  left: 94.5%;
  background-color: #fec246;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 5px;
  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 720px) {
    left: 95%;
  }

  @media (max-width: 530px) {
    left: 94%;
  }
`;

const BurgerMenuSecondLine = styled.div`
  display: none;
  cursor: pointer;

  z-index: 20;
  left: 91.3%;
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: #f56748;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 15px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 650px) {
    left: 91%;
  }

  @media (max-width: 550px) {
    left: 90.5%;
  }

  @media (max-width: 530px) {
    left: 88.8%;
  }

  @media (max-width: 450px) {
    left: 87.4%;
  }

  @media (max-width: 360px) {
    left: 86.4%;
  }
`;

const BurgerMenuSecondLineSmall = styled.div`
  display: none;
  cursor: pointer;

  z-index: 20;
  left: 90%;
  position: absolute;
  width: 5px;
  height: 4px;
  background-color: #6550de;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 15px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 620px) {
    left: 89%;
  }

  @media (max-width: 530px) {
    left: 87%;
  }

  @media (max-width: 460px) {
    left: 84%;
  }

  @media (max-width: 320px) {
    left: 83%;
  }
`;

const BurgerMenuThirdLine = styled.div`
  display: none;
  cursor: pointer;

  z-index: 20;
  left: 91.3%;
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: #f56748;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 15px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 650px) {
    left: 91%;
  }

  @media (max-width: 550px) {
    left: 90.5%;
  }

  @media (max-width: 530px) {
    left: 88.8%;
  }

  @media (max-width: 450px) {
    left: 87.4%;
  }

  @media (max-width: 360px) {
    left: 86.4%;
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
  background-color: #fec246;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 25px;

  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 620px) {
    left: 89%;
  }

  @media (max-width: 530px) {
    left: 87%;
  }

  @media (max-width: 460px) {
    left: 84%;
  }

  @media (max-width: 320px) {
    left: 83%;
  }
`;

const BurgerMenuFourthLineSmall = styled.div`
  display: none;
  cursor: pointer;
  z-index: 20;
  position: absolute;
  width: 5px;
  height: 4px;
  left: 94.5%;
  background-color: #f56748;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s all ease;
  margin-top: 25px;
  @media (max-width: 767px) {
    display: block;
  }

  @media (max-width: 720px) {
    left: 95%;
  }

  @media (max-width: 530px) {
    left: 94%;
  }
`;

const BurgerMenu = (props) => {
  const { resetSessionData } = props;

  const [checkboxType, changeCheckbox] = useState(false);
  const [isMenuClicked, changeMenuClick] = useState(false);

  const clickHandler = () => {
    if (isMenuClicked) {
    changeCheckbox(!checkboxType);
    }
  };

  const pageClose = () => {
    if (checkboxType) {
      changeCheckbox(false);
      changeMenuClick(false);
    }
  };

  const isCLicked = () => {
    changeMenuClick(true);
  }

  return (
    <BurgerMenuContainer onClick={pageClose} >
      <BurgerMenuInput id="check-nav" type="checkbox" onChange={clickHandler} checked={checkboxType} />
      <BurgerMenuLabel htmlFor="check-nav">
        <BurgerMenuFirstLine className="one" />
        <BurgerMenuFirstLineSmall className="one"/>
        <BurgerMenuSecondLineSmall className="one"/>
        <BurgerMenuSecondLine className="two" onClick={isCLicked}/>
        <BurgerMenuThirdLine className="three" onClick={isCLicked}/>
        <BurgerMenuFourthLine className="four" />
        <BurgerMenuFourthLineSmall className="four"/>
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
