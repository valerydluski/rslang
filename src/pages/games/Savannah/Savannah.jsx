import React from 'react';
import '../Savannah/style.css';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';


const Bounce = styled.div`animation: 3s ${keyframes`${slideInDown}`}`;

const SavannahComponent = (props) => (
  <div>
    <p>
        Word : {props.name}
      </p>
  </div>
);


class Savannah extends React.Component {

  state = {
    gameStarted: false
  }

  reload() {
    console.log('again');
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

return (
  <div className="savannah_container">
    <h1>Savannah</h1>
    <Bounce onAnimationEnd={this.reload}>
    <div className="english_word">
      <SavannahComponent name = {'Word to learn'}/>
      </div>
      </Bounce>
      <div className="game_words">
    <SavannahComponent name = {'translation'}/>
    <SavannahComponent />
    <SavannahComponent />
    <SavannahComponent />
    </div>
    
    </div>
)

}
}
export default Savannah;
