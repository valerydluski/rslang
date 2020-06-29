import React from 'react';
import PropTypes from 'prop-types';
import ModalWordStyled from '../../components/Modal/Styled/ModalWordsBlockStyled';
import ModalWordTextStyled from './Styled/ModalWordTextStyled';
import ModalAudioIconStyled from './Styled/ModalAudioIconStyled';

const ModalWord = (props) => {
  const { propertiesForShowing, wordHandler, word, audioForPlay } = props;

  const wordClick = () => wordHandler(word[0]);

  return (
    <ModalWordStyled onClick={wordClick}>
      <ModalWordTextStyled amount={propertiesForShowing.length}>
        {audioForPlay ? <ModalAudioIconStyled /> : null}
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
  audioForPlay: PropTypes.string,
};

ModalWord.defaultProps = {
  propertiesForShowing: [],
  wordHandler: () => {},
  audioForPlay: null,
};

export default ModalWord;
