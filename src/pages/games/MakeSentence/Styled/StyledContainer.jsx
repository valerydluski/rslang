import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background: #fafafa;

  @media ${DEVICE.tablet} {
    padding: 20px;
  }
`;

export default StyledContainer;
