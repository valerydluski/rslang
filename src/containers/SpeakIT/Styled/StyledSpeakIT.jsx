import styled from 'styled-components';

const SpeakITContainerStyled = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  place-items: center;
  background: #fafafa;
  box-sizing: border-box;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 450px) {
    margin-top: 70px;
  }
`;

export default SpeakITContainerStyled;
