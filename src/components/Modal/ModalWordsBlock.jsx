import React from 'react';
import PropTypes from 'prop-types';
import ModalWordsBlockStyled from './Styled/ModalWordsBlockStyled';
import ModalWord from './ModalWord';

const ModalWordsBlock = (props) => {
  const { header, wordsCollection, words } = props;
  return (
    <>
      <h2>{header}</h2>
      <ModalWordsBlockStyled>
        {words.map((el) => {
          return <ModalWord text={el} key={el} />;
        })}
      </ModalWordsBlockStyled>
    </>
  );
};

ModalWordsBlock.propTypes = {
  header: PropTypes.string.isRequired,
  words: PropTypes.instanceOf(Array).isRequired,
  wordsCollection: PropTypes.instanceOf(Array).isRequired,
};

ModalWordsBlock.defaultProps = {};

export default ModalWordsBlock;
