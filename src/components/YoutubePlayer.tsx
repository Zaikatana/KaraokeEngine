import React from "react";
import YouTube from "react-youtube";

type YoutubePlayerProps = {
  videoId: string;
  onVideoEnd: () => void;
};

export const YoutubePlayer: React.FC<YoutubePlayerProps> = (props) => {
  const { videoId, onVideoEnd } = props;
  const opts = {
    height: "390",
    width: "640",
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={(event) => onReady(event)}
      onEnd={() => onVideoEnd()}
    />
  );
};
