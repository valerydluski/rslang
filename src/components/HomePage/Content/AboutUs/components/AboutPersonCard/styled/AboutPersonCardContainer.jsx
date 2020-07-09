import styled from 'styled-components';
import { DEVICE } from '../../../../../../../config'

const AboutPersonCardContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;

  h3 {
    align-self: center;
    width: fit-content;
    font-weight: bold;
    font-size: 18px;
    height: 35px;
    line-height: 22px;
    text-transform: uppercase;
    color: #000000;
     display: block;
     border-bottom: 1px solid #c4c4c4;
    text-transform: uppercase;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: justify;
    color: #929292;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    align-self: center;
    width: 170px;
  }

  @media ${DEVICE.laptopL} {
    img {
        width: 100px;
      }
  }

  @media ${DEVICE.tablet} {
    width: 100%;
    h3 {
      font-size: 26px;
      height: 35px;
      width: 100%;
      text-align: center;
      }

    span {
        display: inline-block;
        width: 100%;
        font-size: 19px;
        line-height: 27px;
      }
  }
`;

export default AboutPersonCardContainer;