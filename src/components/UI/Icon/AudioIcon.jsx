import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import audioIco from './audioIco.svg';

const AudioIconStyled = styled.img`
  position: absolute;
  top: 18px;
  left: 10px;
  width: 28px;
  height: 28px;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;

const AudioIcon = (props) => {
  const { hiddenIcon } = props;
  return <AudioIconStyled src={audioIco} className={hiddenIcon ? 'hidden' : ''} />;
};

AudioIcon.propTypes = {
  hiddenIcon: PropTypes.bool,
};

AudioIcon.defaultProps = {
  hiddenIcon: false,
};

export default AudioIcon;
