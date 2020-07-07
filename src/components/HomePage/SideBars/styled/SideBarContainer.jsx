import styled from 'styled-components';

const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 18vw;
  background-color: #f3f3f3;
  padding: 30px;
  min-height: 100%;
  box-sizing: border-box;

  span {
    font-size: 16px;
  }

  @media (max-width: 1250px) {
    img {
      width: 137px;
      height: 137px;
    }
  }

  @media (max-width: 1150px) {
    padding: 20px;
    width: 15vw;
    span {
      font-size: 13px;
    }

    img {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 1040px) {
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 950px) {
    width: 150px;
    span {
      font-size: 12px;
    }
  }

  @media (max-width: 850px) {
    width: 135px;
    span {
      font-size: 11px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: row;
    background-color: #ffffff;
    width: 100%;
    height: fit-content;
    grid-template-columns: 1fr 1fr 1fr;
    img {
      width: 130px;
      height: 130px;
    }
    ul {
      color: #ffffff;
      background-color: #404497;
      position: fixed;
      width: 93vw;
      right: 0%;
      height: 100vh;
      } 
  }
   
  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 420px) {
    width: 80%;
  }

  @media (max-width: 390px) {
    width: 75%;
  }
`;

export default SideBarContainer;
