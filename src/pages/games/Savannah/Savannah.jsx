import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';



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

function Savannah () {

  const [gameStarted, setGameChange] = useState(false);
  const [currentWordIndex, changeIndex] = useState(0);
  const [isGameFinished, changeGameMode] = useState(false);

    const startGame = () => {
    setGameChange(true);
    }

    const exitGame = () => {
      setGameChange(false);
      }     

   let structure;
    if(gameStarted) {
       structure = 
      <div className="savannah_container">
    <h1>Savannah</h1>
    <button onClick={exitGame}>Exit</button>
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

    if(!gameStarted) {
      structure = 
     <div className="savannah_container">
   <h1>Savannah</h1>
   <button onClick={startGame}>Click here to start</button>
   </div>
   }

return (
  <div>
    <GoToHomePageButton />
    {structure}
  </div>
)
}
export default Savannah;
