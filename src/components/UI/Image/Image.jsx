import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageContainer from './Styled/ImageContainer';

const ImageStyled = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 100%;
  margin: 0 auto;

  &.small-img {
    width: 100px;
    height: 100px;
  }
`;

const Image = (props) => {
  const { src, className, classNameContainer } = props;
  return (
    <ImageContainer className={classNameContainer}>
      <ImageStyled src={src} alt="img" className={className} />
    </ImageContainer>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  classNameContainer: '',
};

export default Image;
