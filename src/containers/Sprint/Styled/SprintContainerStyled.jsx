import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SprintContainerStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-top: 10px;
  padding: 40px;
  position: relative;

  @media ${DEVICE.mobileL} {
    padding: 20px;
  }
`;
export default SprintContainerStyled;
