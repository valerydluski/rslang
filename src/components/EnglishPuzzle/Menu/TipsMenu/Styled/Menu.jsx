import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const Menu = styled.div`
  order: 2;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${DEVICE.laptop} {
    margin-left: 10px;
  }
`;

export default Menu;
