import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  &.image_speakIT {
    margin-top: 55px;
    justify-self: center;
    height: 100%;
  }

  &.image_learn {
    grid-area: image;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #c4c4c4;
    display: flex;
    align-items: center;
  }
`;

export default ImageContainer;
