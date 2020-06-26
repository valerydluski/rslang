import React from 'react';
import Main from '../../../components/HomePage/Content/Main/Main';
import { GAME_LIST } from '../../../config';

export default function MainContainer() {
  return <Main games={GAME_LIST} />;
}
