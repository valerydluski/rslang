import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWordsStart from '../../containers/LearnWords/LearnWordsStart';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { checkStatusSession } from '../../redux/Auth/Login/actions';

function LearnWords({ isLoading, isDataLoad, checkStatus }) {
  if (isLoading) return <LoadingSpinner />;
  if (!isDataLoad) {
    checkStatus();
    return null;
  }

  return <LearnWordsStart />;
}

LearnWords.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isDataLoad: PropTypes.bool.isRequired,
  checkStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.loadDataLoaderReducer.loading,
    isDataLoad: state.dataLoad.isDataLoadFromApi,
  };
};

const mapDispatchToProps = {
  checkStatus: checkStatusSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWords);
