import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ReduxRegistrationForm from '../../components/Auth/Registration/RegistrationForm/RegistrationForm';
import getLoginStatus from '../../utils/getLoginStatus';

const Registration = (props) => {
  const { registerToServer } = props;

  if (getLoginStatus()) {
    return <Redirect to="/" />;
  }

  const onSubmit = (formData) => {
    registerToServer(formData);
  };

  return <ReduxRegistrationForm onSubmit={onSubmit} />;
};

Registration.propTypes = {
  registerToServer: PropTypes.func.isRequired,
};

export default Registration;
