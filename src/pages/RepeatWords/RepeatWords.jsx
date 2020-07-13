import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepeatWordsStart from '../../containers/RepeatWords/RepeatWordsStart';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import { setDifficultWordsMode } from '../../redux/RepeatWords/actions';

function RepeatWords(props) {
  const {
    isLoading,
    isDataLoad,
    checkStatus,
    setDifficultModeHandler,
    location: {
      state: { difficultWords },
    },
  } = props;
  if (isLoading) return <LoadingSpinner />;
  if (!isDataLoad) {
    checkStatus();
    return null;
  }
  setDifficultModeHandler(difficultWords);

  return <RepeatWordsStart />;
}

RepeatWords.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isDataLoad: PropTypes.bool.isRequired,
  checkStatus: PropTypes.func.isRequired,
  setDifficultModeHandler: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      difficultWords: PropTypes.bool,
    }),
  }),
};

RepeatWords.defaultProps = {
  location: {
    state: {
      difficultWords: false,
    },
  },
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loadDataLoaderReducer.loading,
    isDataLoad: state.dataLoad.isDataLoadFromApi,
  };
};

const mapDispatchToProps = {
  checkStatus: checkStatusSession,
  setDifficultModeHandler: setDifficultWordsMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWords);
