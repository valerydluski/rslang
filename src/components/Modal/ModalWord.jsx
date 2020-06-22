import React from 'react';
import PropTypes from 'prop-types';
import ModalWordStyled from './Styled/ModalWordsBlockStyled';
import ModalWordTextStyled from './Styled/ModalWordTextStyled';

const ModalWord = (props) => {
  const { text, wordHandler, word } = props;

  const wordClick = () => wordHandler(word[0]);

  return (
    <ModalWordStyled onClick={wordClick}>
      <ModalWordTextStyled>{text}</ModalWordTextStyled>
    </ModalWordStyled>
  );
};

ModalWord.propTypes = {
  text: PropTypes.string,
  wordHandler: PropTypes.func,
  word: PropTypes.instanceOf(Array).isRequired,
};

ModalWord.defaultProps = {
  text: '',
  wordHandler: () => {},
};

export default ModalWord;
