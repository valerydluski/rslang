import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

const Image = (props) => {
  const { src } = props;
  const [link] = useState(src);
  return (
    <div className="image_container">
      <ImageStyled src={link} alt="img" />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
};

Image.defaultProps = {
  src:
    'https://raw.githubusercontent.com/valerydluski/Images/ca230ba9ba73d437f3b80fe90d55f87aebfa7df0/defaultImage.svg',
};

export default Image;
