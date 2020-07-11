import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnFormStyled = styled.form`
  margin: 0 auto;
  display: grid;
  grid-template-rows: 80% 20%;
  width: 1280px;
  height: 800px;

  @media ${DEVICE.laptopL} {
    width: 1020px;
  }
`;

export default LearnFormStyled;
