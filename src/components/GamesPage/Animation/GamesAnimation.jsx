import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation/games/data.json';
import AnimationContainerStyled from './Styled/AnimationContainerStyled';

function GamesAnimation({ defaultOptions }) {
  return (
    <AnimationContainerStyled>
      <Lottie options={defaultOptions} />
    </AnimationContainerStyled>
  );
}

GamesAnimation.propTypes = {
  defaultOptions: PropTypes.instanceOf(Object),
};

GamesAnimation.defaultProps = {
  defaultOptions: {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
};

export default GamesAnimation;
