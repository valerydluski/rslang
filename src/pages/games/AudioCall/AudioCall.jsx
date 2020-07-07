import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AudiocallContainer from '../../../containers/Audiocall/AudiocallContainer';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import AudiocallStyled from './Styled/AudiocallStyled';

const AudioCall = ({ wordsCollection }) => {
  const [words, changeWords] = useState(wordsCollection);
  const [backgroundOpacity, changeBackgroundOpacity] = useState(0);

  useEffect(() => {
    changeWords(wordsCollection);
    changeBackgroundOpacity(0);
  }, [wordsCollection]);

  return (
    <AudiocallStyled backgroundOpacity={backgroundOpacity}>
      <GoToHomePageButton />
      <AudiocallContainer
        key={wordsCollection.join()}
        wordsCollection={words}
        changeBackgroundOpacity={changeBackgroundOpacity}
        backgroundOpacity={backgroundOpacity}
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
