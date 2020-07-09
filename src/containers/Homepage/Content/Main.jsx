import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../../components/HomePage/Content/Main/Main';
import { GAME_LIST } from '../../../config';
import { resetStoreLearnWords } from '../../../redux/LearnWords/actions';

function MainContainer({ name, resetStoreLearnWordsHandler }) {
  useEffect(() => {
    resetStoreLearnWordsHandler();
  });
  return <Main games={GAME_LIST} userName={name} />;
}

MainContainer.propTypes = {
  name: PropTypes.string.isRequired,
  resetStoreLearnWordsHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.userSettings.settings.name,
  };
};

const mapDispatchToProps = {
  resetStoreLearnWordsHandler: resetStoreLearnWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
