import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const SideBarContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  background-color: #f3f3f3;
  padding: 30px;
  min-height: 100%;
  box-sizing: border-box;

  span {
    font-size: 16px;
  }

  @media ${DEVICE.laptopL} {
    padding: 20px;

    div {
      border-bottom: none;
    }

    img {
      width: 100px;
      height: 100px;
    }

    span {
      font-size: 13px;
    }
  }

  @media ${DEVICE.laptop} {
    grid-column-start: 2;
    grid-row-start: 1;
    width: auto;
    background-color: #ffffff;
    nav {
      display: none;
    }
    min-height: auto;
  }

  @media ${DEVICE.laptop} {
    width: auto;
  }

  @media ${DEVICE.tablet} {
    display: flex;
    width: auto;
    grid-column-start: auto;
    grid-row-start: auto;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    height: fit-content;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      width: 130px;
      height: 130px;
    }
    ul {
      color: #ffffff;
      background-color: #404497;
      position: fixed;
      width: 93vw;
      right: 0%;
      height: 100vh;
    }
  }
`;

export default SideBarContainerRight;
