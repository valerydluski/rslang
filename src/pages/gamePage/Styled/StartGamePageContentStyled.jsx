import styled from 'styled-components';

const GameNameStyled = styled.h3`
  font-weight: 700;
  font-size: 37px;
  line-height: 45px;
  margin: 55px 10px 0;
`;

const GameDescriptionStyled = styled.p`
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
  margin: 5px 10px;
  max-width: 500px;
`;

const StartGamePageContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 750px;
  min-width: fit-content;
  justify-content: space-between;
  margin-top: 80px;
  a {
    color: #ffffff;
    display: block;
    background-color: #6550de;
    border-radius: 100%;
    width: 185px;
    height: 185px;
    line-height: 185px;
    text-align: center;
    font-weight: 700;
    font-size: 37px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
    &:hover {
      background-color: #fec246;
      transition: all 0.4s ease;
    }
  }
  link {
    color: red;
  }
`;

const ContainerNameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export { ContainerNameAndDescription, GameDescriptionStyled, GameNameStyled, StartGamePageContent };
