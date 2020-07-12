import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const userDescriptionContainer = styled.div`
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
  border-bottom: 1px solid #c4c4c4;

  h2 {
    font-weight: bold;
    font-size: 31px;
    line-height: 38px;
    margin: 0;
    margin-top: 14px;
  }

  p {
    font-weight: 500;
    font-size: 16.4706px;
    line-height: 20px;
    color: #b2b2b2;
    margin: 0;
    margin-top: 6px;
    margin-bottom: 30px;
  }

  @media ${DEVICE.tablet} {
    width: auto;
    margin-left: 0;
    padding-top: 0;
  }
`;

export default userDescriptionContainer;
