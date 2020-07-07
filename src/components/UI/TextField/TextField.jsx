import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../../../config';

const TextStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 54px;
  margin: 0 auto;

  @media ${DEVICE.tablet} {
    font-size: 30px;
    line-height: 40px;
  }
`;

const TextContainer = styled.div`
  display: flex;

  &.text-field_speakIT {
    margin: 10px 0;
    height: 54px;

    @media ${DEVICE.tablet} {
      height: 40px;
    }
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
