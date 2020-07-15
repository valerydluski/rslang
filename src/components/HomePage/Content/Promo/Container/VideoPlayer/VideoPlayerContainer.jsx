import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=RveCsqXjs5U&feature=youtu.be' width="100%" controls />
    </div>
  );
};

export default VideoPlayer;
