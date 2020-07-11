import styled from 'styled-components';
import { DEVICE } from '../../../config';

const OptionsFieldStyled = styled.div`
  display: flex;
  width: 1200px;
  margin: 30px 0;

  @media ${DEVICE.laptopL} {
    width: 924px;
  }

  @media ${DEVICE.laptop} {
    width: 668px;
    margin: 20px 0;
  }

  @media ${DEVICE.tablet} {
    width: 528px;
    margin: 10px 0;
  }
`;

export default OptionsFieldStyled;
