import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(252, 212, 212);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;

export default OverlayStyled;
