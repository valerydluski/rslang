import React from 'react';
import AppState from './helpers/AppState';
import EndPage from './hoc/Pages/EndPage/EndPage'
import MainPage from './hoc/Pages/MainPage/MainPage'
import StartPage from './hoc/Pages/StartPage/StartPage'

class EnglishPuzzle extends React.Component {

  state = {
    page: AppState.start
  }

  toggleStartHandler = () => {
    this.setState({
      page: AppState.main
    })
  }

  toggleEndHandler = () => {
    this.setState({
      page: AppState.start
    })
  }

  render() {
    let content;
    switch(this.state.page) {
      case AppState.start:
        content = (
          <StartPage
            onClick={this.toggleStartHandler}
          />
        )
        break;
      case AppState.main:
        content = (
          <MainPage/>
        )
        break;
      case AppState.end:
        content = (
          <EndPage
            onClick={this.toggleEndHandler}
          />
        )
        break;
    }
    console.log(content)

    return (
      <div>
        <main>
          { content }
        </main>
      </div>
    )
  }
}

export default EnglishPuzzle;
