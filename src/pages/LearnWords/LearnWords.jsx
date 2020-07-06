import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWordsStart from '../../containers/LearnWords/LearnWordsStart';
import { generateLearnWordsCollection } from '../../redux/LearnWords/actions';

function LearnWords({ generateWordsCollection }) {
  generateWordsCollection();
  // return <LearnWordsStart />;
  return null;
}

LearnWords.propTypes = {
  generateWordsCollection: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  generateWordsCollection: generateLearnWordsCollection,
};

export default connect(null, mapDispatchToProps)(LearnWords);
