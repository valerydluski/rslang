import styled from 'styled-components';
import { DEVICE } from '../../../../../../../config';

const TitleWithUnderline = styled.h3`
  margin-top: 45px;
  width: 100%;
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
  color: #7d7d7d;
  text-align: right;
  border-bottom: 1px solid #c4c4c4;

  @media ${DEVICE.laptop} {
    margin-top: 0px;
  }
`;

export default TitleWithUnderline;
