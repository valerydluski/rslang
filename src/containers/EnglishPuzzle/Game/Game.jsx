import React, {Component} from 'react';
import styled from 'styled-components';
// import {connect} from 'react-redux';
import Puzzle from '../../../components/EnglishPuzzle/Puzzle/Puzzle'

const Container = styled.div`
  margin-top: 10px;
`;

const Playfield = styled.div`
  width: 560px;
  height: 560px;
  background: #C4C4C4;
  display: flex;
  flex-wrap: wrap;
`;

const Source = styled.div`
  display: flex;
  margin-top: 30px;
  width: 560px;
  height: 56px;
`;

export default class Game extends Component {
  render() {
    return (
      <Container>
        <Playfield>
          <Puzzle>The</Puzzle>
          <Puzzle>woman</Puzzle>
          <Puzzle>like</Puzzle>
          <Puzzle>to</Puzzle>
          <Puzzle>ride</Puzzle>
          <Puzzle>the</Puzzle>
          <Puzzle>bysicle</Puzzle>
        </Playfield>
        <Source></Source>
      </Container>
    )
  }
}
