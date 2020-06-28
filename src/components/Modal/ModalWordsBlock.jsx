import React from 'react';
import PropTypes from 'prop-types';
import ModalWordsBlockStyled from './Styled/ModalWordsBlockStyled';
import ModalWord from '../../containers/Modal/ModalWord';

const ModalWordsBlock = (props) => {
  const { header, wordsCollection, words, showProperties, wordHandler } = props;

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
            <ModalWord propertiesForShowing={arr} key={el} wordHandler={wordHandler} word={word} />
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
};

ModalWordsBlock.defaultProps = {
  wordHandler: () => {},
};

export default ModalWordsBlock;
