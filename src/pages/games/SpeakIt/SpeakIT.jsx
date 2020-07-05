import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import { checkStatusSession } from '../../../redux/Auth/Login/actions';
import GameContainerSpeakIT from '../../../containers/SpeakIT/GameContainerSpeakIT';

const SpeakIT = (props) => {
  const { isLoading, isDataLoad, checkStatus } = props;
  if (isLoading) return <LoadingSpinner />;
  if (!isDataLoad) {
    checkStatus();
    return null;
  }
  return (
    <>
      <GoToHomePageButton />
      <GameContainerSpeakIT />
    </>
  );
};

SpeakIT.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
