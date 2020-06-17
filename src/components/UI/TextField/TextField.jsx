import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 54px;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 54px;
`;

const TextField = (props) => {
  const { text } = props;
  return (
    <TextContainer>
      <TextStyled>{text}</TextStyled>
    </TextContainer>
  );
};

TextField.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextField;
