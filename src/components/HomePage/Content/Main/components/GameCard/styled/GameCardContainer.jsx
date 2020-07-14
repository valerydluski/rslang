import styled from 'styled-components';
import { DEVICE } from '../../../../../../../config';

const GameCardContainer = styled.div`
  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #000000;
    margin: 20px 0 15px;
    text-transform: uppercase;

    @media ${DEVICE.laptop} {
      font-size: 22px;
      margin: 27px 0 20px;
    }
  }

  p {
    margin: 0;
    height: 100px;
    flex-grow: 1;
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
      width: 100%;
      height: 75px;
    }
  }

  @media ${DEVICE.laptop} {
    width: 100%;
    height: auto;
  }

  @media ${DEVICE.tablet} {
    width: 100%;
    p {
      height: auto;
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
