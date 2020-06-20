import React, {Component} from 'react';
import {connect} from 'react-redux'

class EnglishPuzzle extends Component {
  render() {
    return (
      <h1>EnglishPuzzle</h1>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
