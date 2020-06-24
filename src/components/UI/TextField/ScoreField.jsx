import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScroreStyled = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25.569px;
  line-height: 31px;
`;

const Score = (props) => {
  const { score } = props;
  return <ScroreStyled>{score}</ScroreStyled>;
};

Score.propTypes = {
  score: PropTypes.number,
};

Score.defaultProps = {
  score: 0,
};

export default Score;
