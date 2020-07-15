import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnCardsContainer = styled.div`
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  padding: 80px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media ${DEVICE.laptop} {
    padding: 40px;
  }

  @media ${DEVICE.tablet} {
    padding: 20px;
    height: 100%;
  }
`;

export const TranslateStyled = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  color: #7d7d7d;

  @media ${DEVICE.laptop} {
    font-size: 22px;
    line-height: 30px;
  }

  @media ${DEVICE.tablet} {
    font-size: 18px;
    line-height: 30px;
  }

  @media ${DEVICE.mobileL} {
    margin-top: 30px;
  }
`;

export const TextExampleStyled = styled.p`
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  color: #7d7d7d;
  display: inline;
  margin: 0;

  @media ${DEVICE.laptop} {
    font-size: 22px;
    line-height: 30px;
  }

  @media ${DEVICE.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const TextExampleTranslateStyled = styled.div`
  font-weight: 500;
  font-size: 25.1118px;
  line-height: 31px;
  color: #b2b2b2;

  @media ${DEVICE.laptop} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TextMeaningStyled = styled.div`
  font-weight: 500;
  font-size: 25.1118px;
  line-height: 31px;
  color: #b2b2b2;

  @media ${DEVICE.laptop} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TextMeaningTranslateStyled = styled.div`
  font-weight: 500;
  font-size: 25.1118px;
  line-height: 31px;
  color: #b2b2b2;

  @media ${DEVICE.laptop} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TopContentStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;

  @media ${DEVICE.laptop} {
    flex-direction: column;
  }
`;

export const CenterContentStyled = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export const BottomContentStyled = styled.div`
  margin-top: 10px;
  padding-top: 20px;
  width: 100%;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export default LearnCardsContainer;
