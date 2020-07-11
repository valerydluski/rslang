import styled from 'styled-components';
import { DEVICE } from '../../../config';

const ResultItem = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #c4c4c4;
  margin-top: 50px;

  @media ${DEVICE.tablet} {
    width: 300px;
  }

  & span {
    font-weight: bold;
    font-size: 23px;
    line-height: 28px;

    @media ${DEVICE.tablet} {
      font-size: 18px;
    }
  }

  & span.dimension {
    color: #929292;
  }

  & span.value {
    color: #000000;
    margin-left: 40%;

    @media ${DEVICE.tablet} {
      margin-left: 0;
    }
  }

  & span.correct {
    color: #6550de;
  }

  & span.incorrect {
    color: #f56748;
  }
`;

export default ResultItem;
