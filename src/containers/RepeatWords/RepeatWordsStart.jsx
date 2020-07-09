import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepeatWordsCardContainer from './RepeatWordsContainer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function RepeatWordsStart(props) {
  const { isWordsLoading } = props;
  if (isWordsLoading) return <LoadingSpinner />;

  return <RepeatWordsCardContainer />;
}

RepeatWordsStart.propTypes = {
  isWordsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.newLearnCardShow.loadingWordsCollection,
    isWordsCollectionLoaded: state.newLearnCardShow.isWordsCollectionLoaded,
  };
};

export default connect(mapStateToProps, null)(RepeatWordsStart);
