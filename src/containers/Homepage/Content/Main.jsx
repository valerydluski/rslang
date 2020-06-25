import React from 'react';
import Main from '../../../components/HomePage/Content/Main/Main';
import { gamesList } from '../../../config';

export default function MainContainer() {
  return <Main games={gamesList} />;
}
