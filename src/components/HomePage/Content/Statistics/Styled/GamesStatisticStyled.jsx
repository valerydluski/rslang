import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const GamesStatisticStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameStatisticStyled = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: start;
`;

export const GameNameStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #6550de;
  @media ${DEVICE.laptop} {
    font-size: 14px;
    line-height: 16px;
  }
  @media ${DEVICE.mobileL} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const GameStatisticTextStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  color: #b2b2b2;

  p {
    margin-left: 5px;
  }

  @media ${DEVICE.laptop} {
    font-size: 14px;
    line-height: 16px;
  }
  @media ${DEVICE.mobileL} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ContenGamesStatisticStyled = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const GameCountStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #6550de;
  margin-left: 5px;

  @media ${DEVICE.laptop} {
    font-size: 14px;
    line-height: 16px;
  }
  @media ${DEVICE.mobileL} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export default GamesStatisticStyled;
