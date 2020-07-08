import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWordCardContainer from './LearnWordsContainer';
import { generateLearnWordsCollection } from '../../redux/LearnWords/actions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function LearnWordsStart(props) {
  const { generateLearnWordsCollectionHandler, isWordsLoading, isWordsCollectionLoaded } = props;
  if (isWordsLoading) return <LoadingSpinner />;
  if (!isWordsCollectionLoaded) {
    generateLearnWordsCollectionHandler();
    return null;
  }

  return <LearnWordCardContainer />;
}

LearnWordsStart.propTypes = {
  generateLearnWordsCollectionHandler: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool.isRequired,
  isWordsCollectionLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.newLearnCardShow.loadingWordsCollection,
    isWordsCollectionLoaded: state.newLearnCardShow.isWordsCollectionLoaded,
  };
};

const mapDispatchToProps = {
  generateLearnWordsCollectionHandler: generateLearnWordsCollection,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordsStart);
