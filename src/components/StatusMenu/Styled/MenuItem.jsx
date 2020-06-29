import styled from 'styled-components';
import { ITEM_PAGE } from '../constants';

const MenuItem = styled.div`
  height: 100%;
  width: ${(props) => (props.type === ITEM_PAGE ? '280' : '160')}px;
  display: flex;
`;

export default MenuItem;
