import styled from 'styled-components';

const AboutPersonCardContainer = styled.div`
  h3 {
    font-weight: bold;
    font-size: 18px;
    height: 35px;
    line-height: 22px;
    text-transform: uppercase;
    color: #000000;
    margin-top: -16vh;
    margin-left: 14.1vw;
     display: block;
     border-bottom: 1px solid #c4c4c4;
    text-transform: uppercase;
  }

  p {
    width: 30vw;
    margin-left: 14vw;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: justify;
    color: #929292;
    margin-top: 0vh;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 170px;
  }

  @media (max-width: 1150px) {
    img {
    width: 137px;
    }
  }

  @media (max-width: 1100px) {
    h3 {
    font-size: 13px;
    height: 35px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 950px) {
    width: 13vw;
  }

  @media (max-width: 830px) {
    width: 12vw;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 75vh;
    h3 {
      font-size: 26px;
      height: 35px;
      }
    p {
        width: 70vw;
      }
    span {
        font-size: 19px;
        line-height: 27px;
      }
  }

  @media (max-width: 620px) {
    height: 65vh;
  }

  @media (max-width: 500px) {
    width: 97%;
    height: 55vh;
  }

  @media (max-width: 420px) {
    height: 45vh;
    width: 80vw;
  }

  @media (max-width: 390px) {
    width: 80vw;
  }

  @media (max-width: 340px) {
    width: 77vw;
  }
`;

export default AboutPersonCardContainer;