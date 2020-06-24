import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 0 auto;

  &.small-img {
    width: 100px;
    height: 100px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = (props) => {
  const { src, className } = props;
  return (
    <ImageContainer>
      <ImageStyled src={src} alt="img" className={className} />
    </ImageContainer>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
