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

  &.text-field_speakIT {
    margin-top: 10px;
    justify-self: center;
    min-height: 54px;
  }
`;

const TextField = (props) => {
  const { text, className } = props;
  return (
    <TextContainer className={className}>
      <TextStyled>{text}</TextStyled>
    </TextContainer>
  );
};

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextField.defaultProps = {
  className: '',
};

export default TextField;
