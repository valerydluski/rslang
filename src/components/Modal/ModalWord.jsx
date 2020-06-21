import React from 'react';
import PropTypes from 'prop-types';
import ModalWordStyled from './Styled/ModalWordsBlockStyled';
import ModalWordTextStyled from './Styled/ModalWordTextStyled';

const ModalWord = (props) => {
  const { text } = props;

  return (
    <ModalWordStyled>
      <ModalWordTextStyled>{text}</ModalWordTextStyled>
    </ModalWordStyled>
  );
};

ModalWord.propTypes = {
  text: PropTypes.string,
};

ModalWord.defaultProps = {
  text: '',
};

export default ModalWord;
