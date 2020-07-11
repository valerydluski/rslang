import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../../components/HomePage/Content/Main/Main';
import { GAME_LIST } from '../../../config';
import { resetStoreLearnWords } from '../../../redux/LearnWords/actions';
import { resetStoreRepeatWords } from '../../../redux/RepeatWords/actions';

function MainContainer({ name, resetStoreLearnWordsHandler, resetStoreRepeatWordsHandler }) {
  useEffect(() => {
    resetStoreLearnWordsHandler();
    resetStoreRepeatWordsHandler();
  });
  return <Main games={GAME_LIST} userName={name} />;
}

MainContainer.propTypes = {
  name: PropTypes.string.isRequired,
  resetStoreLearnWordsHandler: PropTypes.func.isRequired,
  resetStoreRepeatWordsHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.userSettings.settings.name,
  };
};

const mapDispatchToProps = {
  resetStoreLearnWordsHandler: resetStoreLearnWords,
  resetStoreRepeatWordsHandler: resetStoreRepeatWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
