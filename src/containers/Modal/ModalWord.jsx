import React from 'react';
import PropTypes from 'prop-types';
import ModalWordStyled from '../../components/Modal/Styled/ModalWordsBlockStyled';
import ModalWordTextStyled from './Styled/ModalWordTextStyled';

const ModalWord = (props) => {
  const { propertiesForShowing, wordHandler, word } = props;

  const wordClick = () => wordHandler(word[0]);

  return (
    <ModalWordStyled onClick={wordClick}>
      <ModalWordTextStyled amount={propertiesForShowing.length}>
        {propertiesForShowing.map((textPart) => (
          <div key={textPart}>{textPart}</div>
        ))}
      </ModalWordTextStyled>
    </ModalWordStyled>
  );
};

ModalWord.propTypes = {
  propertiesForShowing: PropTypes.instanceOf(Array),
  wordHandler: PropTypes.func,
  word: PropTypes.instanceOf(Array).isRequired,
};

ModalWord.defaultProps = {
  propertiesForShowing: [],
  wordHandler: () => {},
};

export default ModalWord;
