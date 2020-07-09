import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepeatWordsCardContainer from './RepeatWordsContainer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { getUserWords } from '../../redux/Dictionary/actions';

function RepeatWordsStart(props) {
  const {
    isWordsLoading,
    getUserWordsHandler,
    isWordsCollectionLoaded,
    isUserWordsLoading,
  } = props;

  if (isWordsLoading || isUserWordsLoading) return <LoadingSpinner />;

  if (isWordsCollectionLoaded) {
    getUserWordsHandler();
  }

  return <RepeatWordsCardContainer />;
}

RepeatWordsStart.propTypes = {
  isWordsLoading: PropTypes.bool.isRequired,
  isUserWordsLoading: PropTypes.bool.isRequired,
  isWordsCollectionLoaded: PropTypes.bool.isRequired,
  getUserWordsHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.newLearnCardShow.loadingWordsCollection,
    isWordsCollectionLoaded: state.repeatWords.isWordsCollectionLoaded,
    isUserWordsLoading: state.userWords.loading,
  };
};

const mapDispatchToProps = {
  getUserWordsHandler: getUserWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepeatWordsStart);
