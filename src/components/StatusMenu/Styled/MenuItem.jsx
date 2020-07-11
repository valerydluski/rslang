import styled from 'styled-components';
import { ITEM_PAGE } from '../constants';
import { DEVICE } from '../../../config';

const MenuItem = styled.div`
  height: 100%;
  width: ${(props) => (props.type === ITEM_PAGE ? '280' : '200')}px;
  display: flex;
  align-items: center;

  @media ${DEVICE.laptop} {
    width: ${(props) => (props.type === ITEM_PAGE ? '280' : '180')}px;
  }

  @media ${DEVICE.tablet} {
    width: 80px;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 30px;
  }
`;

export default MenuItem;
