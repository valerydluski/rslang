import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import helloImg from '../../../../../../assets/img/helloImg.svg';
import UserTitleContainer from './styled/UserTitleContainer';

export default function Title(props) {
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
  userName: PropTypes.string,
};

Title.defaultProps = {
  userName: 'User',
};
