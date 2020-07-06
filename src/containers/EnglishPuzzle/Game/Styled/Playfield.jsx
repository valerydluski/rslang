import styled from 'styled-components';
import {
  PLAYFIELD_WIDTH,
  PLAYFIELD_HEIGHT,
  PLAYFIELD_WIDTH_LAPTOP,
  PLAYFIELD_HEIGHT_LAPTOP,
} from '../constants';
import { DEVICE } from '../../../../config';

const Playfield = styled.div`
  margin-left: 62px;
  width: ${PLAYFIELD_WIDTH}px;
  height: ${PLAYFIELD_HEIGHT}px;
  background: #c4c4c4;
  position: relative;
  z-index: 20;
  background-image: ${(props) => (props.url ? `url('${props.url}')` : 'none')};
  background-size: ${PLAYFIELD_WIDTH}px ${PLAYFIELD_HEIGHT}px;

  @media ${DEVICE.laptop} {
    width: ${PLAYFIELD_WIDTH_LAPTOP}px;
    height: ${PLAYFIELD_HEIGHT_LAPTOP}px;
    background-size: ${PLAYFIELD_WIDTH_LAPTOP}px ${PLAYFIELD_HEIGHT_LAPTOP}px;
    margin-left: 35px;
  }
`;

export default Playfield;
