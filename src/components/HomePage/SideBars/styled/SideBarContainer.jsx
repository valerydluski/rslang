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

  img {
    width: 100%;
  }

  span {
    font-size: 16px;
  }

  @media (max-width: 1150px) {
    padding: 20px;
    width: 15vw;
    ul {
    color: #ffffff;
    background-color: #404497;
    /* width: 100vw; */
   /* width: 97vw; */
   /* height: 100vh; */
    position: absolute;
  /*  right: -35vw; */
    } 
    span {
      font-size: 13px;
    }
    img {
      width: 90%;
      height: 65%
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
    img {
      width: 100%;
      height: 60%;
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
