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
    try {
      registerToServer(formData);
      props.history.push('/');
    } catch (e) {}
  };

  return <ReduxRegistrationForm onSubmit={onSubmit} />;
};

Registration.propTypes = {
  registerToServer: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default Registration;
