import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnFormStyled = styled.form`
  margin: 0 auto;
  display: grid;
  grid-template-rows: 80% 20%;
  max-width: 1280px;
  width: 80%;
  height: 700px;

  @media (max-width: 1280px) {
    grid-template-rows: 70% 30%;
    height: 900px;
  }

  @media ${DEVICE.tablet} {
    grid-template-rows: 70% 30%;
    height: 1200px;
  }
`;

export default LearnFormStyled;
