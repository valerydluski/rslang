import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 30px;
  min-height: 100%;
  box-sizing: border-box;

  span {
    font-size: 16px;
    margin-left: 20px;
  }

  @media ${DEVICE.laptop} {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
  }

  @media ${DEVICE.tablet} {
    grid-row-start: auto;
    grid-row-end: auto;
    flex-direction: row;
    background-color: #ffffff;
    width: 100%;
    height: fit-content;
    grid-template-columns: 1fr 1fr 1fr;
    height: auto;
    position: static;
    width: auto;
    ul {
      color: #ffffff;
      background-color: #404497;
      position: fixed;
      width: 100%;
      right: 0%;
      top: 0%;
      margin: 0;
      height: 100vh;
    }
  }
`;

export default SideBarContainer;
