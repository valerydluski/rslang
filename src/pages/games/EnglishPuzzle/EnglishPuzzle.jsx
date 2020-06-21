import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import StatusMenu from '../../../components/EnglishPuzzle/Menu/StatusMenu/StatusMenu'
import TipsMenu from '../../../components/EnglishPuzzle/Menu/TipsMenu/TipsMenu'
import Game from '../../../containers/EnglishPuzzle/Game/Game';

const Content = styled.div`
  width: 100%;
  height: 100vh;
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
  render() {
    return (
      <Content>
        <Container>
          <StatusMenu/>
          <TipsMenu/>
          <Game/>
        </Container>
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    status: {
      level: state.englishPuzzle.status.level,
      page: state.englishPuzzle.status.page
    },
    tips: {
      autoSpeech: state.englishPuzzle.tips.autoSpeech,
      translation: state.englishPuzzle.tips.translation,
      speech: state.englishPuzzle.tips.speech,
      background: state.englishPuzzle.tips.background
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // TODO dispatches callbacks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
