import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import ModalContentStyled from './Styled/ModalContentStyled';
import ModalWordsBlock from '../../components/Modal/ModalWordsBlock';

const ModalContent = (props) => {
  const { wordsCollection, showProperties, wordHandler, correctWords, audioForPlay } = props;
  let { IDontKnowWords } = props;
  IDontKnowWords = IDontKnowWords.map((el) => el.toLowerCase());
  const words = correctWords || wordsCollection;
  const arr = words.map((el) => el.word.toLowerCase());
  const iKnowWords = arr.filter((el) => !IDontKnowWords.includes(el));

  const fn = () => {
    switch (iKnowWords.length) {
      case 10:
        return (
          <ModalWordsBlock
            showProperties={showProperties}
            header={I18n.t('ModalWindows.know')}
            words={iKnowWords}
            wordsCollection={wordsCollection}
            wordHandler={wordHandler}
            audioForPlay={audioForPlay}
          />
        );
      case 0:
        return (
          <ModalWordsBlock
            showProperties={showProperties}
            header={I18n.t('ModalWindows.doNotKnow')}
            words={IDontKnowWords}
            wordsCollection={wordsCollection}
            wordHandler={wordHandler}
            audioForPlay={audioForPlay}
          />
        );
      default:
        return (
          <>
            <ModalWordsBlock
              showProperties={showProperties}
              header={I18n.t('ModalWindows.know')}
              words={IDontKnowWords}
              wordsCollection={wordsCollection}
              wordHandler={wordHandler}
              audioForPlay={audioForPlay}
            />
            <ModalWordsBlock
              showProperties={showProperties}
              header={I18n.t('ModalWindows.doNotKnow')}
              words={iKnowWords}
              wordsCollection={wordsCollection}
              wordHandler={wordHandler}
              audioForPlay={audioForPlay}
            />
          </>
        );
    }
  };

  return <ModalContentStyled amount={showProperties.length}>{fn()}</ModalContentStyled>;
};

ModalContent.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  showProperties: PropTypes.instanceOf(Array),
  IDontKnowWords: PropTypes.instanceOf(Array).isRequired,
  wordHandler: PropTypes.func,
  correctWords: PropTypes.instanceOf(Array),
  audioForPlay: PropTypes.string,
};

ModalContent.defaultProps = {
  wordsCollection: [],
  showProperties: ['word'],
  wordHandler: () => {},
  correctWords: null,
  audioForPlay: null,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    IDontKnowWords: state.gamesReducer.IDontKnowWords,
  };
};

export default connect(mapStateToProps, null)(ModalContent);
