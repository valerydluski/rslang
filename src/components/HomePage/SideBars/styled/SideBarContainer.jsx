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

  & > .menu-i {
    display: none;
  }

  @media ${DEVICE.laptop} {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
  }

  @media ${DEVICE.tablet} {
    padding: 30px 30px 0 30px;
    position: static;
    flex-direction: row;
    height: 90px;
    width: 100%;
    background-color: #ffffff;

    & > .menu-i {
      display: block;
    }
  }
`;

export default SideBarContainer;
