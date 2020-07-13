import styled from 'styled-components';
import { DEVICE } from '../../../config';

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  &.status-menu_speakIT {
    margin-top: 55px;
    justify-content: flex-start;
    width: 400px;

    @media ${DEVICE.tablet} {
      width: 70%;
    }
  }

  @media ${DEVICE.tablet} {
    height: 56px;
  }

  &.none {
    visibility: hidden;
  }
`;

export default Menu;
