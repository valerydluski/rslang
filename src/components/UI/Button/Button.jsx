import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './Styled/StyledButton';

const Button = (props) => {
  const { buttonHandler, text, className } = props;

  return (
    <ButtonStyled className={className} onClick={buttonHandler}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  buttonHandler: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  buttonHandler: () => {},
  text: '',
  className: '',
};

export default Button;
