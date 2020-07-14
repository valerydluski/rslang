import styled from 'styled-components';
import { DEVICE } from '../../../config';

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  &.status-menu_speakIT {
    justify-content: center;
  }

  @media ${DEVICE.tablet} {
    height: 56px;
  }

  &.none {
    visibility: hidden;
  }
`;

export default Menu;
