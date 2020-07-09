import styled from 'styled-components';
import sprintBackgroud from '../../../assets/img/sprint-back.svg';
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
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-image: url(${sprintBackgroud});
  background-position: top right;
  padding: 40px;

  @media ${DEVICE.laptop} {
    background-position: 834px 0;
  }

  @media ${DEVICE.mobileL} {
    padding: 20px;
  }
`;
export default SprintContainerStyled;
