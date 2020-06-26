import React from 'react';
import Main from '../../../components/HomePage/Content/Main/Main';
import { GamesList } from '../../../config';

export default function MainContainer() {
  return <Main games={GamesList} />;
}
