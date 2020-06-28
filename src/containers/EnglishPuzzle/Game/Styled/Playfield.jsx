import styled from 'styled-components';
import { PLAYFIELD_WIDTH, PLAYFIELD_HEIGHT } from '../constants';

const Playfield = styled.div`
  width: ${PLAYFIELD_WIDTH}px;
  height: ${PLAYFIELD_HEIGHT}px;
  background: #c4c4c4;
  position: relative;
  z-index: 20;
  background-image: ${(props) => (props.url ? `url('${props.url}')` : 'none')};
  background-size: ${PLAYFIELD_WIDTH}px ${PLAYFIELD_HEIGHT}px;
`;

export default Playfield;
