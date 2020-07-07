import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AudiocallContainer from '../../../containers/Audiocall/AudiocallContainer';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';

const AudioCall = ({ wordsCollection }) => {
  const [words, changeWords] = useState(wordsCollection);

  useEffect(() => {
    changeWords(wordsCollection);
  }, [wordsCollection]);

  return (
    <div className="audio-call_container">
      <GoToHomePageButton />
      <AudiocallContainer key={wordsCollection.join()} wordsCollection={words} />
    </div>
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
