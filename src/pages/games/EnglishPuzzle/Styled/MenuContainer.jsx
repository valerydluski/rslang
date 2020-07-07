import styled from 'styled-components';
import {
  PLAYFIELD_WIDTH,
  PLAYFIELD_WIDTH_LAPTOP,
} from '../../../../containers/EnglishPuzzle/Game/constants';
import { DEVICE } from '../../../../config';

const MenuContainer = styled.div`
  width: ${PLAYFIELD_WIDTH}px;

  @media ${DEVICE.laptop} {
    width: ${PLAYFIELD_WIDTH_LAPTOP}px;
  }
`;

export default MenuContainer;
