import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepeatWordsCardContainer from './RepeatWordsContainer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { getUserWords } from '../../redux/Dictionary/actions';
import { getRepeatWords } from '../../redux/RepeatWords/actions';

function RepeatWordsStart(props) {
  const {
    isWordsLoading,
    getUserWordsHandler,
    isWordsCollectionLoaded,
    isUserWordsLoading,
    getRepeatWordsHandler,
    isRepeatWordsLoading,
    isRepeatWordsLoaded,
  } = props;

  if (isWordsLoading || isUserWordsLoading || isRepeatWordsLoading) return <LoadingSpinner />;

  if (isWordsCollectionLoaded) {
    getUserWordsHandler();
  }

  if (!isRepeatWordsLoaded) {
    getRepeatWordsHandler();
  }

  return <RepeatWordsCardContainer />;
}

RepeatWordsStart.propTypes = {
  isWordsLoading: PropTypes.bool.isRequired,
  isUserWordsLoading: PropTypes.bool.isRequired,
  isWordsCollectionLoaded: PropTypes.bool.isRequired,
  isRepeatWordsLoading: PropTypes.bool.isRequired,
  isRepeatWordsLoaded: PropTypes.bool.isRequired,
  getUserWordsHandler: PropTypes.func.isRequired,
  getRepeatWordsHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.newLearnCardShow.loadingWordsCollection,
    isWordsCollectionLoaded: state.repeatWords.isWordsCollectionLoaded,
    isUserWordsLoading: state.userWords.loading,
    isRepeatWordsLoading: state.repeatWords.loading,
    isRepeatWordsLoaded: state.repeatWords.isRepeatWordsLoaded,
  };
};

const mapDispatchToProps = {
  getUserWordsHandler: getUserWords,
  getRepeatWordsHandler: getRepeatWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordsStart);
