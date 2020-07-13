import styled from 'styled-components';
import background from '../../../../assets/img/background.png';
import { DEVICE } from '../../../../config';

const SavannahContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 30px;
  background-image: url(${background});
  @media ${DEVICE.laptop} {
    height: fit-content;
    background-size: cover;
  }
  @media ${DEVICE.tablet} {
    height: fit-content;
    background-size: cover;
  }
`;

export default SavannahContainerStyled;
