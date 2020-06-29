import React from 'react';
import PropTypes from 'prop-types';
import ModalWordsBlockStyled from './Styled/ModalWordsBlockStyled';
import ModalWord from '../../containers/Modal/ModalWord';

const ModalWordsBlock = (props) => {
  const { header, wordsCollection, words, showProperties, wordHandler, audioForPlay } = props;

  return (
    <>
      <h2>{header}</h2>
      <ModalWordsBlockStyled>
        {words.map((el) => {
          const word = wordsCollection.filter((element) => element.word.toLowerCase() === el);
          const arr = showProperties.map((prop) => {
            return word[0][`${prop}`];
          });
          return (
            <ModalWord
              propertiesForShowing={arr}
              audioForPlay={audioForPlay}
              key={el}
              wordHandler={wordHandler}
              word={word}
            />
          );
        })}
      </ModalWordsBlockStyled>
    </>
  );
};

ModalWordsBlock.propTypes = {
  header: PropTypes.string.isRequired,
  words: PropTypes.instanceOf(Array).isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
  showProperties: PropTypes.instanceOf(Array).isRequired,
  wordHandler: PropTypes.func,
  audioForPlay: PropTypes.string,
};

ModalWordsBlock.defaultProps = {
  wordHandler: () => {},
  audioForPlay: null,
};

export default ModalWordsBlock;
