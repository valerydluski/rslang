import styled from 'styled-components';
import { DEVICE } from '../../../config';

const InitialSentenceWordsStyled = styled.div`
  text-align: center;
  height: 70px;
  line-height: 70px;
  font-weight: 500;
  font-size: 30px;
  margin-left: 10px;
  color: #929292;

  @media ${DEVICE.laptop} {
    font-size: 20px;
    line-height: 36px;
    height: 36px;
    margin-left: 5px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 25px;
    height: 25px;
  }
`;

const MainWordStyled = styled(InitialSentenceWordsStyled)`
  font-weight: 800;
  cursor: pointer;
  position: relative;
  color: #000;
  div {
    position: absolute;
    height: fit-content;
    width: fit-content;
    line-height: 30px;
    top: 55px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
    text-decoration: none;

    @media ${DEVICE.laptop} {
      top: 30px;
    }

    @media ${DEVICE.tablet} {
      top: 15px;
    }
  }
`;

export { InitialSentenceWordsStyled, MainWordStyled };
