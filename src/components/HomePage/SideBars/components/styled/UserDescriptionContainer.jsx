import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const userDescriptionContainer = styled.div`
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid #c4c4c4;

  h2 {
    font-weight: bold;
    font-size: 31px;
    line-height: 38px;
    margin: 14px 0;
  }

  @media ${DEVICE.tablet} {
    width: auto;
    margin-left: 0;
    padding-top: 0;
  }
`;

export default userDescriptionContainer;
