import React from 'react';
import PropTypes from 'prop-types';
import ReduxRegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = (props) => {
  const { registerToServer } = props;
  const onSubmit = (formData) => {
    console.log('onSubmit -> formData', formData);
    registerToServer(formData);
  };

  return <ReduxRegistrationForm onSubmit={onSubmit} />;
};

Registration.propTypes = {
  registerToServer: PropTypes.func.isRequired,
};

export default Registration;
