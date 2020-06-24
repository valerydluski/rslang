import React from 'react';
import styled from 'styled-components';
import Controls from '../../../containers/EnglishPuzzle/Controls/Controls';

const Container = styled.div`
  margin-top: 30px;
  width: 560px;
  display: flex;
  justify-content: space-between;
`;

const Info = () => {
  return (
    <Container>
      <Controls />
    </Container>
  );
};

export default Info;
