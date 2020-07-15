import styled from 'styled-components';
import { DEVICE } from '../../../config';

const OptionsFieldStyled = styled.div`
  display: flex;
  width: 1200px;
  margin-bottom: 30px;
  height: 60px;

  @media ${DEVICE.laptopL} {
    width: 924px;
  }

  @media ${DEVICE.laptop} {
    width: 668px;
    margin-bottom: 20px;
  }

  @media ${DEVICE.tablet} {
    width: 528px;
    margin-bottom: 10px;
  }
`;

export default OptionsFieldStyled;
