import styled from 'styled-components';

const ModalStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 800px;
  overflow: auto;

  flex-direction: column;
  border-radius: 20px;
  background-color: white;
  z-index: 100;
  transition: all 0.5s;
`;

export default ModalStyled;
