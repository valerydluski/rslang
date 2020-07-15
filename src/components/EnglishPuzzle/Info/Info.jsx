import React from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Translation from '../Translation/Translation';
import Container from './Styled/Container';
import Left from './Styled/Left';
import Right from './Styled/Right';

const Info = ({ newGame }) => {
  return (
    <Container>
      <Left>
        <Translation />
      </Left>
      <Right>
        <Controls newGame={newGame} />
      </Right>
    </Container>
  );
};

Info.propTypes = {
  newGame: PropTypes.func,
};

Info.defaultProps = {
  newGame: () => {},
};

export default Info;
