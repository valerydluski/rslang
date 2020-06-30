import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;

  &.login-form_logo {
    grid-area: logo;
    align-self: center;
    justify-self: start;
    margin-left: 60px;
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
  const { onClick, className } = props;
  return (
    <LogoContainer onClick={onClick} className={className}>
      <LogoImage>
        <LogoImageText>RS</LogoImageText>
      </LogoImage>
      <LogoTitle>Lang</LogoTitle>
    </LogoContainer>
  );
}

Logo.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Logo.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Logo;
