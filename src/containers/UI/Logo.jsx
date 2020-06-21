import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../components/UI/Logo/Logo';

export default function LogoContainer() {
  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };

  return <Logo onClick={goHome} />;
}
