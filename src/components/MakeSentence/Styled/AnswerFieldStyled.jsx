import styled from 'styled-components';
import { DEVICE } from '../../../config';

const AnswerFieldStyled = styled.div`
  width: 1200px;
  margin: 50px 0;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #c4c4c4;
  background: ${(props) => (props.isDraggingOver ? '#FEC246' : '#fff')};
  transition: 0.3s linear;

  @media ${DEVICE.laptopL} {
    width: 924px;
  }

  @media ${DEVICE.laptop} {
    width: 668px;
    height: 40px;
    margin: 30px 0;
  }

  @media ${DEVICE.tablet} {
    padding: 2px 0;
    width: 528px;
    margin: 20px 0;
  }
`;

export default AnswerFieldStyled;
