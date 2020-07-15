import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/UI/Logo/Logo';

export default function LogoContainer({ isOpen }) {
  const history = useHistory();
  const goHome = () => {
    history.push('/home');
  };

  return <Logo onClick={goHome} isOpen={isOpen} />;
}

LogoContainer.propTypes = {
  isOpen: PropTypes.bool,
};

LogoContainer.defaultProps = {
  isOpen: false,
};
