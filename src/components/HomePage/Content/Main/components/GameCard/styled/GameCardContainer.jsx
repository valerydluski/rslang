import styled from 'styled-components';
import { DEVICE } from '../../../../../../../config'

const GameCardContainer = styled.div`
  h3 {
    font-weight: bold;
    font-size: 18px;
    height: 35px;
    line-height: 22px;
    text-transform: uppercase;
    color: #000000;
    margin: 13px 0 3px;
    text-transform: uppercase;
  }

  p {
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
  }

  @media ${DEVICE.laptopL} {
    p {
      width: auto;
    }
  }

  @media ${DEVICE.laptop} {
    width: 100%;
  }

  @media ${DEVICE.tablet} {
    width: 100%;
    p {
      width: 100%;
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media ${DEVICE.mobileL} {
    width: 100%;
    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export default GameCardContainer;
