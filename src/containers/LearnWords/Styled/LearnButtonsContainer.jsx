import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${DEVICE.tablet} {
    margin-top: 10px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > button {
    flex-grow: 1;
  }
  &:last-child {
    margin-top: 20px;
  }

  @media ${DEVICE.laptop} {
    flex-wrap: wrap;
    & > button {
      width: 100%;
      margin: 10px 0 !important;
      &:last-child {
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
      }

      @media ${DEVICE.tablet} {
        font-size: 18px;
      }
    }
  }
`;

export const ProgressBarContainer = styled.div`
  margin: 0 20px;
  flex-grow: 1;
`;

export const ProgressBarCount = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #7d7d7d;

  @media ${DEVICE.tablet} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export default LearnButtonsContainer;
