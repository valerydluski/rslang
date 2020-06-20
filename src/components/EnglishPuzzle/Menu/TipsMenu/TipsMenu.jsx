import React from 'react'
import styled from 'styled-components';
import SpeechIcon from '../../../UI/Icon/SpeechIcon.jsx'
import TextIcon from '../../../UI/Icon/TextIcon.jsx'
import MusicIcon from '../../../UI/Icon/MusicIcon.jsx'
import PictureIcon from '../../../UI/Icon/PictureIcon.jsx'

const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: -60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TipButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7968DC;
  border-width: 0;
  margin-top: 5px;
  &:focus, &:active {
    outline: none;
  }
  &:first-child {
    margin-top: 0;
  }
`;

const TipsMenu = props => {
  return (
    <Menu>
      <TipButton>
        <SpeechIcon/>
      </TipButton>
      <TipButton>
        <TextIcon/>
      </TipButton>
      <TipButton>
        <MusicIcon/>
      </TipButton>
      <TipButton>
        <PictureIcon/>
      </TipButton>
    </Menu>
  )
}

export default TipsMenu;
