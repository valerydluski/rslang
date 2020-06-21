import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalContentStyled from './Styled/ModalContentStyled';
import ModalWordsBlock from '../../components/Modal/ModalWordsBlock';

const ModalContent = (props) => {
  const { wordsCollection, unspokenWords, showProperties } = props;
  const arr = wordsCollection.map((el) => el.word.toLowerCase());
  const iKnowWords = arr.filter((el) => !unspokenWords.includes(el));

  const fn = () => {
    switch (iKnowWords.length) {
      case 10:
        return (
          <ModalWordsBlock
            showProperties={showProperties}
            header="i know"
            words={iKnowWords}
            wordsCollection={wordsCollection}
          />
        );
      case 0:
        return (
          <ModalWordsBlock
            showProperties={showProperties}
            header="i don't know"
            words={unspokenWords}
            wordsCollection={wordsCollection}
          />
        );
      default:
        return (
          <>
            <ModalWordsBlock
              showProperties={showProperties}
              header="i don't know"
              words={unspokenWords}
              wordsCollection={wordsCollection}
            />
            <ModalWordsBlock
              showProperties={showProperties}
              header="i know"
              words={iKnowWords}
              wordsCollection={wordsCollection}
            />
          </>
        );
    }
  };

  return <ModalContentStyled>{fn()}</ModalContentStyled>;
};

ModalContent.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  showProperties: PropTypes.instanceOf(Array),
  unspokenWords: PropTypes.instanceOf(Array).isRequired,
};

ModalContent.defaultProps = {
  wordsCollection: [],
  showProperties: ['word'],
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
    unspokenWords: state.changeUnspokenWords.unspokenWords,
  };
};

export default connect(mapStateToProps, null)(ModalContent);
