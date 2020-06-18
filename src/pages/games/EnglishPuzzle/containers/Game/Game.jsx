import React from 'react'
class Quiz extends React.Component {
  state = {
    game: {
      page: 0,
      level: 0,
      row: 0,
      isPageEnd: false,
      pic: null,
      sentence: null
    },
    tips: {
      autoSpeech: true,
      translation: true,
      speech: true,
      background: true
    }
  }
}
