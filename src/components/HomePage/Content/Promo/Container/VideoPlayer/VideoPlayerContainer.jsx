import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=Rq5SEhs9lws" width="100%" controls="true" />
      ;
    </div>
  );
};

export default VideoPlayer;
