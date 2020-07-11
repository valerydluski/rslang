import React from 'react';
import PropTypes from 'prop-types';
import { Container, Circle } from './Styled/ProgressBarStyled';

const difficulties = ['new', 'easy', 'simple', 'medium', 'difficult', 'hard'];
const colors = ['#404497', '#389929', '#38c9d1', '#FEC246', '#fa9e25', '#F56748'];
const defaultColor = '#C4C4C4';

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
