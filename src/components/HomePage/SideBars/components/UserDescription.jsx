import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import UserDescriptionContainer from './styled/UserDescriptionContainer';
import StyledUserPhoto from './styled/StyledUserPhoto';
import photo from '../../../../assets/img/photo.png';

function UserDescription({ name }) {
  return (
    <UserDescriptionContainer>
      <StyledUserPhoto src={photo} alt="User Photo" />
      <h2>{name}</h2>
      <p>
        <Translate value="HomePage.place" />
      </p>
    </UserDescriptionContainer>
  );
}

UserDescription.propTypes = {
  name: PropTypes.string,
};

UserDescription.defaultProps = {
  name: '',
};

function mapStateToProps(state) {
  return {
    name: state.userSettings.settings.name,
  };
}

export default connect(mapStateToProps, null)(UserDescription);
