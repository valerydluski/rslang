import React from 'react';
import styled from 'styled-components';
import StatusMenu from '../../../containers/EnglishPuzzle/Menu/StatusMenu/StatusMenu';
import TipsMenu from '../../../containers/EnglishPuzzle/Menu/TipsMenu/TipsMenu';
import Game from '../../../containers/EnglishPuzzle/Game/Game';
import Info from '../../../components/EnglishPuzzle/Info/Info';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EnglishPuzzle = () => {
  return (
    <Content>
      <Container>
        <StatusMenu />
        <TipsMenu />
        <Game />
        <Info />
      </Container>
    </Content>
    // TODO add controls
    // TODO add results window
  );
};

export default EnglishPuzzle;
