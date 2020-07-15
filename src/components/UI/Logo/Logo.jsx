import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: ${(props) => (props.isOpen ? 'fixed' : 'relative')};
  z-index: 12;
  top: ${(props) => (props.isOpen ? '30px' : 'auto')};
  left: ${(props) => (props.isOpen ? '30px' : 'auto')};

  &.login-form_logo {
    grid-area: logo;
    align-self: center;
    justify-self: start;
    margin-left: 60px;

    @media ${DEVICE.mobileL} {
      margin-left: 0;
    }
  }
`;

const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  background: #404497;
  border-radius: 60px 60px 60px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 38px;
  margin: 0 5px;
  display: flex;
  align-items: center;
`;

const LogoImageText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 38px;
  color: #fff;
`;

function Logo(props) {
  const { onClick, className, isOpen } = props;
  return (
    <LogoContainer onClick={onClick} className={className} isOpen={isOpen}>
      <LogoImage className="logo">
        <LogoImageText>RS</LogoImageText>
      </LogoImage>
      <LogoTitle>Lang</LogoTitle>
    </LogoContainer>
  );
}

Logo.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};

Logo.defaultProps = {
  onClick: () => {},
  className: '',
  isOpen: false,
};

export default Logo;
