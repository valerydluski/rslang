import React from 'react';
import ReactDOM from 'react-dom'
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';


const Bounce = styled.div`animation: 3s ${keyframes`${slideInDown}`}`;

const SavannahComponent = (props) => (
  <div>
    <p>
        {props.num}. Word : {props.name}
      </p>
  </div>
);
const extendLoad = () => (
    ReactDOM.render(element, document.getElementById('first'))
)

document.addEventListener('keydown', (event) => {
  if (event.key > 0 && event.key < 5) {
  console.log(event.key);
  }
})

const element = 
    <div className = 'game_words'>
      <div id = 'first' className="english_word">
      <Bounce onAnimationEnd={extendLoad}>
      <SavannahComponent name = {'Word to learn'}/>
      </Bounce>
      </div>
      <SavannahComponent name = {'come again'}/>
    <SavannahComponent />
    <SavannahComponent />
    <SavannahComponent />
    </div>;

class Savannah extends React.Component {

  state = {
    gameStarted: false
  }

    startGame = () => {
    this.setState({
      gameStarted: true
    })
    }

    exitGame = () => {
      this.setState({
        gameStarted: false
      })
      }     

  render() {
    const divStyle = {
      textAlign: 'center'
    }
   let structure;
    if(this.state.gameStarted) {
       structure = 
      <div className="savannah_container">
    <h1>Savannah</h1>
    <button onClick={this.exitGame}>Exit</button>
    <div id = 'first'>
    <Bounce onAnimationEnd={extendLoad}>
    <div className="english_word">
      <SavannahComponent name = {'Word to learn'}/>
      </div>
      </Bounce>
      <div className="game_words">
    <SavannahComponent num = {1} name = {'translation'}/>
    <SavannahComponent num = {2} name = {'translation2'} />
    <SavannahComponent num = {3} name = {'translation3'} />
    <SavannahComponent num = {4} name = {'translation4'} />
    </div>
    </div>
    </div>
    }

    if(!this.state.gameStarted) {
      structure = 
     <div className="savannah_container">
   <h1>Savannah</h1>
   <button onClick={this.startGame}>Click here to start</button>
   </div>
   }

return (
  <div>
    {structure}
  </div>
)

}
}
export default Savannah;
