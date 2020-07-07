import styled from 'styled-components';
import React from 'react';
import MainNavigationMenu from '../../../../../containers/Navigation/MainNavigationMenu'

const BurgerMenuContainer = styled.div`
  cursor: pointer;
  display: none;
  margin-left: 45px;
  margin-top: 10px;

  .navbar-list {
    z-index: 10;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    margin-top: -43px;
    transition: 1s all ease;
  }

  input:checked ~.navbar-list {
    opacity: 1;
    visibility: unset;
  }

  input:checked ~ label .one {
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  
  input:checked ~ label .two {
    transform: rotate(-45deg);
    margin-bottom: 0;
    transition: 0.3s all ease;
  }
  
  input:checked ~ label .three {
    transform: rotate(45deg);
    margin-bottom: 0;
    transition: 0.3s all ease;
  }
  
  input:checked ~ label .four {
    opacity: 0;
    transition: 0.3s all ease;
  }

  @media (max-width: 767px) {
    display: block;
    .navbar-list {
    display: block;
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

  @media (max-width: 450x) {
    left: 80%;
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

  @media (max-width: 450x) {
    left: 80%;
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

  @media (max-width: 450x) {
    left: 80%;
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

  @media (max-width: 450x) {
    left: 80%;
  }
`;

const BurgerMenu = () => {
  return (
    <BurgerMenuContainer>
      <BurgerMenuInput id="check-nav" type="checkbox"/>
      <BurgerMenuLabel for="check-nav">
        <BurgerMenuFirstLine className='one'/>
        <BurgerMenuSecondLine className='two'/>
        <BurgerMenuThirdLine className='three'/>
        <BurgerMenuFourthLine className='four'/>
      </BurgerMenuLabel>
      <MainNavigationMenu />
    </BurgerMenuContainer>
  );
  }

export default BurgerMenu;
