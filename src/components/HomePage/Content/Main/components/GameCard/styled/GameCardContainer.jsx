import styled from 'styled-components';

const GameCardContainer = styled.div`
  width: 13vw;

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
    width: 13vw;
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
    width: 12vw;
    h3 {
    font-size: 13px;
    height: 35px;
    }
    p {
      width: 12vw;
      font-size: 12px;
      height: 150px;
    }
  }

  @media (max-width: 950px) {
    width: 9vw;
    p {
      width: 9vw;
      font-size: 12px;
      height: 170px;
    }
  }

  @media (max-width: 830px) {
    width: 11vw;
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
    width: 80vw;
  }

  @media (max-width: 340px) {
    width: 77vw;
  }
`;

export default GameCardContainer;
