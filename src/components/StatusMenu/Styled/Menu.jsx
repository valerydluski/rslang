import styled from 'styled-components';
import { DEVICE } from '../../../config';

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 26px;

  &.status-menu_speakIT {
    margin-top: 55px;
    justify-content: flex-start;
    width: 400px;

    @media ${DEVICE.tablet} {
      justify-content: space-around;
      width: 70%;
    }
  }
`;

export default Menu;
