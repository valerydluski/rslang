import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 54px;
`;

const TextField = (props) => {
  const { text } = props;
  const [textForField] = useState(text);
  return (
    <div className="text_container">
      <TextStyled>{textForField}</TextStyled>
    </div>
  );
};

TextField.propTypes = {
  text: PropTypes.string,
};

TextField.defaultProps = {
  text: 'translate',
};

export default TextField;
