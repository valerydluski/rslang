import styled from 'styled-components';
import { DEVICE } from '../../../config';

const ControlContainerStyled = styled.div`
  max-width: 500px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  min-width: 400px;

  @media ${DEVICE.tablet} {
    min-width: 250px;
    max-width: 300px;
  }
`;
export default ControlContainerStyled;
