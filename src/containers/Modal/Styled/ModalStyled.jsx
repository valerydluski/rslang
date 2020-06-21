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
  background: linear-gradient(to bottom, rgba(0, 32, 63) 0%, rgba(0, 10, 20) 100%);
  z-index: 6;
  transition: all 0.5s;
`;

export default ModalStyled;
