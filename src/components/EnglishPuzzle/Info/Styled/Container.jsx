import styled from 'styled-components';
import {
  PLAYFIELD_WIDTH,
  PLAYFIELD_WIDTH_LAPTOP,
} from '../../../../containers/EnglishPuzzle/Game/constants';
import { DEVICE } from '../../../../config';

const Container = styled.div`
  margin-top: 30px;
  width: ${PLAYFIELD_WIDTH}px;
  display: flex;
  align-items: center;

  @media ${DEVICE.laptop} {
    margin-top: 15px;
    width: ${PLAYFIELD_WIDTH_LAPTOP}px;
  }
`;

export default Container;
