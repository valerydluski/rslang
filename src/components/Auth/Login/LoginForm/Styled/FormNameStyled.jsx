import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const FormNameStyled = styled.div`
  grid-area: header;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  align-self: center;
  justify-self: start;
  margin-left: 150px;

  @media ${DEVICE.laptop} {
    margin-left: 60px;
  }

  @media ${DEVICE.mobileL} {
    margin-left: 0;
  }
`;

export default FormNameStyled;
