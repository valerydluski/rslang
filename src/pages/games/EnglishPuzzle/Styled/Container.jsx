import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const Container = styled.div`
  max-width: 1024px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE.laptop} {
    padding: 0 60px;
  }
`;

export default Container;
