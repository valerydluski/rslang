import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import helloImg from '../../../../assets/img/helloImg.svg';
import UserTitleContainer from '../../../../components/HomePage/Content/Main/components/Title/styled/UserTitleContainer';

function Title(props) {
  const { userName } = props;
  return (
    <UserTitleContainer bg={helloImg}>
      <h2>
        <Translate value="HomePage.greeting" />, {userName}
      </h2>
    </UserTitleContainer>
  );
}

Title.propTypes = {
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userName: state.userSettings.settings.name,
  };
};

export default connect(mapStateToProps, null)(Title);
