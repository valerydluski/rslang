import React from 'react';
import AboutUs from '../../../../../components/HomePage/Content/AboutUs/AboutUs';
import { TEAM_LIST } from '../../../../../config';

export default function AboutUsContainer() {
  return <AboutUs team={TEAM_LIST} />;
}
