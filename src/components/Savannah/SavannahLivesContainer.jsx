import React from 'react';
import PropTypes from 'prop-types';
import { SavannahLiveEmptyStyled, SavannahLiveFilledStyled } from './Styled/SavannahLivesStyled';
import SavannahLivesContainerStyled from './Styled/SavannahLivesContainerStyled';

const SavannahLivesContainer = ({ wrongAmount, wholeLives }) => {
  const livesArr = new Array(wholeLives).fill(0).map((a, i) => {
    return wholeLives - i > wrongAmount ? 1 : 0;
  });
  const lives = livesArr.map((live, i) => {
    const key = `live-${i}`;
    return live ? <SavannahLiveFilledStyled key={key} /> : <SavannahLiveEmptyStyled key={key} />;
  });
  return <SavannahLivesContainerStyled>{lives}</SavannahLivesContainerStyled>;
};

SavannahLivesContainer.propTypes = {
  wrongAmount: PropTypes.number,
  wholeLives: PropTypes.number,
};

SavannahLivesContainer.defaultProps = {
  wholeLives: 5,
  wrongAmount: 0,
};

export default SavannahLivesContainer;
