import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-web';
import animationData from '../../../assets/animation/results/data.json';
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
