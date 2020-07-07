import styled from 'styled-components';
import { ITEM_PAGE } from '../constants';
import { DEVICE } from '../../../config';

const MenuItem = styled.div`
  height: 100%;
  width: ${(props) => (props.type === ITEM_PAGE ? '280' : '220')}px;
  display: flex;
  align-items: center;

  @media ${DEVICE.laptop} {
    width: ${(props) => (props.type === ITEM_PAGE ? '280' : '180')}px;
  }

  @media ${DEVICE.tablet} {
    width: ${(props) => (props.type === ITEM_PAGE ? '280' : '180')}px;
  }
`;

export default MenuItem;
