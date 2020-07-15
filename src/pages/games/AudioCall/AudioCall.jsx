import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AudiocallContainer from '../../../containers/Audiocall/AudiocallContainer';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import AudiocallStyled from './Styled/AudiocallStyled';

const AudioCall = ({ wordsCollection }) => {
  const [words, changeWords] = useState(wordsCollection);
  const [gameProgressLine, changegameProgressLine] = useState(0);

  useEffect(() => {
    changeWords(wordsCollection);
    changegameProgressLine(0);
  }, [wordsCollection]);

  return (
    <AudiocallStyled gameProgressLine={gameProgressLine}>
      <GoToHomePageButton />
      <AudiocallContainer
        key={wordsCollection.join()}
        wordsCollection={words}
        changegameProgressLine={changegameProgressLine}
        gameProgressLine={gameProgressLine}
      />
    </AudiocallStyled>
  );
};

AudioCall.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
};

AudioCall.defaultProps = {
  wordsCollection: [],
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
  };
};

export default connect(mapStateToProps, null)(AudioCall);
