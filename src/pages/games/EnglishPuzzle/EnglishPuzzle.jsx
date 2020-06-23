import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import StatusMenu from '../../../components/EnglishPuzzle/Menu/StatusMenu/StatusMenu';
import TipsMenu from '../../../components/EnglishPuzzle/Menu/TipsMenu/TipsMenu';
import Game from '../../../containers/EnglishPuzzle/Game/Game';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  margin-top: 120px;
`;

class EnglishPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Container>
          <StatusMenu />
          <TipsMenu />
          <Game />
        </Container>
      </Content>
      // TODO add controls
      // TODO add results window
    );
  }
}

function mapStateToProps(state) {
  return {
    level: state.englishPuzzle.level,
    page: state.englishPuzzle.page,
    autoSpeech: state.englishPuzzle.autoSpeech,
    translation: state.englishPuzzle.translation,
    speech: state.englishPuzzle.speech,
    background: state.englishPuzzle.background,
  };
}

function mapDispatchToProps() {
  return {
    // TODO dispatches callbacks
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
