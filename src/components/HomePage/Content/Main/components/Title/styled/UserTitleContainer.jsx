import styled from 'styled-components';
import { DEVICE } from '../../../../../../../config';

const UserTitleContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background-size: cover;

  @media ${DEVICE.laptopL} {
    height: 205px;
  }

  h2 {
    margin: 0;
    position: absolute;
    left: 26px;
    bottom: 6px;
    color: #ffffff;
    font-weight: bold;
    font-size: 29px;
    line-height: 56px;
    z-index: 1;
  }
`;

export default UserTitleContainer;
