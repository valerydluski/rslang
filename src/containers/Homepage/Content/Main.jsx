import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../../../components/HomePage/Content/Main/Main';
import { GAME_LIST } from '../../../config';

function MainContainer({ name }) {
  return <Main games={GAME_LIST} userName={name} />;
}

MainContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.userSettings.settings.name,
  };
};

export default connect(mapStateToProps, null)(MainContainer);
