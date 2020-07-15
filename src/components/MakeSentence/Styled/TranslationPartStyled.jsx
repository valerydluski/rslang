import styled from 'styled-components';
import { DEVICE } from '../../../config';

const TranslationPartStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 60px;
  line-height: 40px;
  font-weight: 500;
  font-size: 20px;
  width: ${(props) => props.width}px;
  margin: 0 5px;
  padding: 5px 10px;
  background: #6550de;
  cursor: pointer;
  user-select: none;
  color: #fff;

  &.correct {
    border-bottom: 4px solid #5da271;
  }

  &.wrong {
    border-bottom: 4px solid #f56748;
  }

  @media ${DEVICE.laptopL} {
    font-size: 15px;
  }

  @media ${DEVICE.laptop} {
    height: 40px;
    font-size: 12px;
    margin: 0 3px;
  }

  @media ${DEVICE.tablet} {
    font-size: 10px;
    height: 30px;
    margin: 0 2px;
  }
`;

export default TranslationPartStyled;
