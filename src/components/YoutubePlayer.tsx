import React from "react";
import YouTube from "react-youtube";

export const YoutubePlayer: React.FC<{
  videoId: string;
  onVideoEnd: () => void;
}> = (props) => {
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
