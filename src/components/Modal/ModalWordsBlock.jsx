import React from 'react';
import PropTypes from 'prop-types';
import ModalWordsBlockStyled from './Styled/ModalWordsBlockStyled';
import ModalWord from './ModalWord';

const ModalWordsBlock = (props) => {
  const { header, wordsCollection, words, showProperties } = props;
  return (
    <>
      <h2>{header}</h2>
      <ModalWordsBlockStyled>
        {words.map((el) => {
          const word = wordsCollection.filter((element) => element.word.toLowerCase() === el);
          const arr = showProperties.map((prop) => {
            return word[0][`${prop}`];
          });
          return <ModalWord text={arr.join(' ')} key={el} />;
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
};

ModalWordsBlock.defaultProps = {};

export default ModalWordsBlock;
