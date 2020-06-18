import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonSpeakITStyled = styled.button`
  position: relative;
  width: 290px;
  height: 53px;
  background-color: #6550de;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22.5488px;
  margin-left: 10px;
  outline-style: none;
  border: none;
  cursor: pointer;
`;

const ButtonSpeakIT = (props) => {
  const { buttonHandler, text } = props;

  const handler = () => {
    buttonHandler();
  };

  return <ButtonSpeakITStyled onClick={handler}>{text}</ButtonSpeakITStyled>;
};

ButtonSpeakIT.propTypes = {
  buttonHandler: PropTypes.func,
  text: PropTypes.string,
};

ButtonSpeakIT.defaultProps = {
  buttonHandler: () => {},
  text: '',
};

export default ButtonSpeakIT;
