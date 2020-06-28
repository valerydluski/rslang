import React from 'react';
import Controls from '../Controls/Controls';
import Translation from '../Translation/Translation';
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
