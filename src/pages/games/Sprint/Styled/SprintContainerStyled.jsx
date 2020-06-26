import styled from 'styled-components';
import sprintBackgroud from '../../../../assets/img/sprint-back.svg';

const SprintContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding-top: 10px;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-image: url(${sprintBackgroud});
  background-position: top right;
`;
export default SprintContainerStyled;
