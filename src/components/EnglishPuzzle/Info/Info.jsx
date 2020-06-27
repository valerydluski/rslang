import React from 'react';
import Controls from '../../../containers/EnglishPuzzle/Controls/Controls';
import Translation from '../../../containers/EnglishPuzzle/Translation/Translation';
import Container from './Styled/Container';
import Left from './Styled/Left';
import Right from './Styled/Right';

const Info = () => {
  return (
    <Container>
      <Left>
        <Translation />
      </Left>
      <Right>
        <Controls />
      </Right>
    </Container>
  );
};

export default Info;
