import styled from 'styled-components';

const AboutPersonCardContainer = styled.div`
  h3 {
    font-weight: bold;
    font-size: 18px;
    height: 35px;
    line-height: 22px;
    text-transform: uppercase;
    color: #000000;
    margin-top: -19vh;
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

  @media (max-width: 1295px) {
      p, h3 {
    margin-left: 16.1vw;
      }
  }

  @media (max-width: 1250px) {
    img {
        width: 137px;
      }

      p, h3 {
        margin-left: 14.1vw;
          }
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
    margin-top: -15vh;
    }

    p {
      font-size: 12px;
    }

    img {
        width: 120px;
      }
  }

  @media (max-width: 950px) {
    p, h3 {
        margin-left: 16.1vw;
          }
  }

  @media (max-width: 830px) {
    p, h3 {
        margin-left: 17.1vw;
          }
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 56vh;
    h3 {
      font-size: 26px;
      height: 35px;
       margin-left: 0;
      margin-top: 0;
      width: 100%;
      text-align: center;
      }

      p {
    margin-left: 0;
    margin-top: 0;
    width: auto;
      }

    span {
        display: inline-block;
        width: 100%;
        font-size: 19px;
        line-height: 27px;
      }

      img {
          margin-left: 41%;
          margin-bottom: 5vh;
      }
  }

  @media (max-width: 740px) {
    img {
        margin-left: 39%;
    }
  }

  @media (max-width: 600px) {
    img {
        margin-left: 38%;
    }
  }

  @media (max-width: 510px) {
    img {
        margin-left: 36%;
    }
  }


  @media (max-width: 500px) {
      margin-bottom: 10vh;
  }

  @media (max-width: 450px) {
    img {
        margin-left: 33%;
    }
  }

  @media (max-width: 425px) {
    height: 63vh;
}

@media (max-width: 400px) {
    img {
        margin-left: 28%;
    }
  }

@media (max-width: 352px) {
    height: 68vh;
    img {
        margin-left: 24%;
    }
}
`;

export default AboutPersonCardContainer;