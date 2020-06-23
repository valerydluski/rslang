import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalContentStyled from './Styled/ModalContentStyled';
import ModalWordsBlock from '../../components/Modal/ModalWordsBlock';

const ModalContent = (props) => {
  const { wordsCollection, IDontKnowWords, showProperties, wordHandler } = props;
  const arr = wordsCollection.map((el) => el.word.toLowerCase());
  const iKnowWords = arr.filter((el) => !IDontKnowWords.includes(el));

  const fn = () => {
    switch (iKnowWords.length) {
      case 10:
        return (
          <ModalWordsBlock
            showProperties={showProperties}
            header="i know"
            words={iKnowWords}
            wordsCollection={wordsCollection}
            wordHandler={wordHandler}
          />
        );
      case 0:
        return (
          <ModalWordsBlock
            showProperties={showProperties}
            header="i don't know"
            words={IDontKnowWords}
            wordsCollection={wordsCollection}
            wordHandler={wordHandler}
          />
        );
      default:
        return (
          <>
            <ModalWordsBlock
              showProperties={showProperties}
              header="i don't know"
              words={IDontKnowWords}
              wordsCollection={wordsCollection}
              wordHandler={wordHandler}
            />
            <ModalWordsBlock
              showProperties={showProperties}
              header="i know"
              words={iKnowWords}
              wordsCollection={wordsCollection}
              wordHandler={wordHandler}
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
  IDontKnowWords: PropTypes.instanceOf(Array).isRequired,
  wordHandler: PropTypes.func,
};

ModalContent.defaultProps = {
  wordsCollection: [],
  showProperties: ['word'],
  wordHandler: () => {},
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
    IDontKnowWords: state.gamesReducer.IDontKnowWords,
  };
};

export default connect(mapStateToProps, null)(ModalContent);
