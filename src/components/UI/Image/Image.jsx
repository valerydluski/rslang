import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = (props) => {
  const { src } = props;
  return (
    <ImageContainer>
      <ImageStyled src={src} alt="img" />
    </ImageContainer>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
