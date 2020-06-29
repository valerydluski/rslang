import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LearnWordCardContainer from './LearnWordsContainer';
import { checkStatusSession, isAlreadyCheckStatusSession } from '../../redux/Auth/Login/actions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function LearnWordsStart(props) {
  const { isStatusChecked, checkStatusSessionHandler } = props;

  if (!isStatusChecked) {
    checkStatusSessionHandler();
    return <LoadingSpinner />;
  }

  return <LearnWordCardContainer />;
}

LearnWordsStart.propTypes = {
  isStatusChecked: PropTypes.bool,
  checkStatusSessionHandler: PropTypes.func.isRequired,
};

LearnWordsStart.defaultProps = {
  isStatusChecked: false,
};

const mapStateToProps = (state) => {
  return {
    isCheckStatusLoading: state.checkStatusloaderReducer.loading,
    isStatusChecked: state.isStatusCheckedReducer.isAlreadyCheckStatusSession,
  };
};

const mapDispatchToProps = {
  checkStatusSessionHandler: checkStatusSession,
  checkedSessionStatus: isAlreadyCheckStatusSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(LearnWordsStart);
