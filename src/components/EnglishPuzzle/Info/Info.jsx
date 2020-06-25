import React from 'react';
import styled from 'styled-components';
import Controls from '../../../containers/EnglishPuzzle/Controls/Controls';
import Translation from '../../../containers/EnglishPuzzle/Translation/Translation';

const Container = styled.div`
  margin-top: 30px;
  width: 560px;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  width: 70%;
  height: 100%;
  flex-shrink: 0;
  justify-content: flex-start;
`;

const Right = styled.div`
  width: 30%;
  height: 100%;
  flex-shrink: 0;
  justify-content: flex-end;
`;

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
