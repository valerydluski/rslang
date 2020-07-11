import React, { useState, useEffect, useCallback } from 'react';
import Lottie from 'lottie-react-web';
import animationData from '../../../../assets/animation/banner/data.json';
import animationDataMobile from '../../../../assets/animation/banner-mobile/data.json';
import AnimationContainerStyled from './Styled/AnimationContainerStyled';
import getScreenWidth from '../../../../utils/getScreenWidth';

function SignInAnimation() {
  const [isBreakpoint, changeBreakpoint] = useState(false);

  const breakpoint = 768;

  const onResize = useCallback(() => {
    changeBreakpoint(getScreenWidth() < breakpoint);
  }, [changeBreakpoint]);

  const onOrientationChange = useCallback(() => {
    changeBreakpoint(getScreenWidth() < breakpoint);
  }, [changeBreakpoint]);

  useEffect(() => {
    if (getScreenWidth() < breakpoint) {
      changeBreakpoint(true);
    }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientationChange);
  }, [onResize, onOrientationChange]);

  const options = {
    loop: true,
    autoplay: true,
    animationData: isBreakpoint ? animationDataMobile : animationData,
    rendererSettings: {
      preserveAspectRatio: isBreakpoint ? 'xMinYMin slice' : 'xMinYMid slice',
    },
  };

  return (
    <AnimationContainerStyled>
      <Lottie options={options} />
    </AnimationContainerStyled>
  );
}

export default SignInAnimation;
