import styled from 'styled-components';
import { DEVICE } from '../../../config';

const AnswerFieldStyled = styled.div`
  width: 1200px;
  margin: 50px 0;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 1px solid grey;
  background: linear-gradient(180deg, #fff 40%, #f0f0f0);

  @media ${DEVICE.laptopL} {
    width: 924px;
  }

  @media ${DEVICE.laptop} {
    width: 668px;
    height: 40px;
    margin: 20px 0;
  }

  @media ${DEVICE.tablet} {
    padding: 2px 0;
    width: 528px;
    height: 30px;
    margin: 10px 0;
  }
`;

export default AnswerFieldStyled;
