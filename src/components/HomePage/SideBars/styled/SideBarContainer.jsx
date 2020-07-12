import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 280px;
  background-color: #f3f3f3;
  padding: 30px;
  min-height: 100%;
  box-sizing: border-box;

  span {
    font-size: 16px;
    margin-left: 20px;
  }

  @media ${DEVICE.laptopL} {
    width: 100%;
    padding: 20px;
    img {
      width: 100px;
      height: 100px;
    }

    span {
      font-size: 13px;
      margin-left: 0;
    }
  }

  @media ${DEVICE.laptop} {
    grid-row-start: 1;
    grid-row-end: 3;
    max-height: auto;
  }

  @media ${DEVICE.tablet} {
    grid-row-start: auto;
    grid-row-end: auto;
    flex-direction: row;
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
      width: 100%;
      right: 0%;
      top: 0%;
      margin: 0;
      height: 100vh;
      } 
  }

  
`;

export default SideBarContainer;
