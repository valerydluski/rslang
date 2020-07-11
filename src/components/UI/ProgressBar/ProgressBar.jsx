import React from 'react';
import PropTypes from 'prop-types';
import { Container, Circle } from './Styled/ProgressBarStyled';

const difficulties = ['new', 'easy', 'simple', 'medium', 'difficult', 'hard'];
const colors = ['#F56748', '#FEC246', '#2C9AFF', '#AB9FF1', '#6550DE', '#404497'];
const defaultColor = '#EDF0F3';

const ProgressBar = ({ difficulty }) => {
  const curIndex = difficulties.indexOf(difficulty);
  const color = colors[curIndex];
  return (
    <Container>
      {colors.map((item, index) => (
        <Circle key={item} color={index <= curIndex ? color : defaultColor} />
      ))}
    </Container>
  );
};

ProgressBar.propTypes = {
  difficulty: PropTypes.string,
};

ProgressBar.defaultProps = {
  difficulty: 'new',
};

export default ProgressBar;
