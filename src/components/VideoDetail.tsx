import React from "react";
import { Video } from "../types/Video";
import { YoutubePlayer } from "./YoutubePlayer";

export const VideoDetail: React.FC<{
  video: Video | null;
  onVideoEnd: () => void;
}> = (props) => {
  const { video, onVideoEnd } = props;

  if (!video) {
    return <div>Description</div>;
  }

  return (
    <div>
      <div className="ui embed">
        <YoutubePlayer videoId={video.id.videoId} onVideoEnd={onVideoEnd} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
