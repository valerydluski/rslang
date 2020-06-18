import React from 'react'

const StartPage = props => (
  <div>
    <h1>EnglishPuzzle</h1>
    <p>Click on words, collect phrases.<br/>Words ca be drag and drop. Select tooltips in the menu.</p>
    <button onClick={props.onClick}>Start</button>
  </div>
)

export default StartPage;
