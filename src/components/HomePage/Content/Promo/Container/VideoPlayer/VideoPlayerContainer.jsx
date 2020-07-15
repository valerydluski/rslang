import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=RveCsqXjs5U" width="100%" controls />
    </div>
  );
};

export default VideoPlayer;
