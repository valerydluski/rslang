import styled from 'styled-components';
import { DIRECTION_ROW } from './constants';

const OptionsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction === DIRECTION_ROW ? 'row' : 'column')};
  flex-wrap: wrap;
`;

export default OptionsArea;
