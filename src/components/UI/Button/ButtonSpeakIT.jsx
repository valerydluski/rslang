import React from 'react';
import PropTypes from 'prop-types';
import ButtonSpeakITStyled from './Styled/StyledButtonSpeakIT';

const ButtonSpeakIT = (props) => {
  const { buttonHandler, text, className } = props;

  return (
    <ButtonSpeakITStyled className={className} onClick={buttonHandler}>
      {text}
    </ButtonSpeakITStyled>
  );
};

ButtonSpeakIT.propTypes = {
  buttonHandler: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

ButtonSpeakIT.defaultProps = {
  buttonHandler: () => {},
  text: '',
  className: '',
};

export default ButtonSpeakIT;
