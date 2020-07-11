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
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid grey;
  cursor: pointer;
  user-select: none;

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
