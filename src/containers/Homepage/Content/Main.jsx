import React from 'react';
import Main from '../../../components/HomePage/Content/Main/Main';
import savannahPoster from '../../../assets/img/posters/savannah.svg';
import speakItPoster from '../../../assets/img/posters/speakit.svg';
import puzzlePoster from '../../../assets/img/posters/puzzle.svg';
import audioCallPoster from '../../../assets/img/posters/audio-call.svg';
import sprintPoster from '../../../assets/img/posters/sprint.svg';
import getRedirectFunction from '../../../utils/getRedirectFunction';

export default function MainContainer() {
  const games = [
    {
      title: 'Savannah',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      poster: savannahPoster,
      onClick: getRedirectFunction('/StartGame/Savannah/'),
    },
    {
      title: 'SpeakIT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      poster: speakItPoster,
      onClick: getRedirectFunction('/StartGame/SpeakIT/'),
    },
    {
      title: 'Puzzle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      poster: puzzlePoster,
      onClick: getRedirectFunction('/StartGame/EnglishPuzzle/'),
    },
    {
      title: 'AudioCall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      poster: audioCallPoster,
      onClick: getRedirectFunction('/StartGame/AudioCall/'),
    },
    {
      title: 'Sprint',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      poster: sprintPoster,
      onClick: getRedirectFunction('/StartGame/Sprint/'),
    },
  ];

  return <Main games={games} />;
}
