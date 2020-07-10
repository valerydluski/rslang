import styled from 'styled-components';
import background from '../../../assets/img/background.png';
import { DEVICE } from '../../../config';

const FinalScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('${background}');

  & h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
    text-transform: uppercase;
    margin: 27px 0;
    text-align: center;

    @media ${DEVICE.tablet} {
      font-size: 25px;
    }
  }
`;

export default FinalScreenContainer;
