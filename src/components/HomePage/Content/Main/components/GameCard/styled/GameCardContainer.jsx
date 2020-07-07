import styled from 'styled-components';

const GameCardContainer = styled.div`
  width: 15vw;

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #000000;
    margin: 13px 0 3px;
    text-transform: uppercase;
  }

  p {
    width: 15vw;
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

  @media (max-width: 1100px) {
    h3 {
    font-size: 13px;
    height: 35px;
    }
    p {
      width: 13vw;
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
    width: 90%;
    height: 55vh;
  }

  @media (max-width: 420px) {
    height: 45vh;
    width: 80%;
  }

  @media (max-width: 390px) {
    width: 75%;
  }
`;

export default GameCardContainer;
