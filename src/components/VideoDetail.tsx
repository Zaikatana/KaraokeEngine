import React, { useEffect } from "react";
import { Video } from "../types/Video";
import { YoutubePlayer } from "./YoutubePlayer";

export const VideoDetail: React.FC<{
  video: Video | null;
  onVideoEnd: () => void;
}> = (props) => {
  const { video, onVideoEnd } = props;

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  });

  if (!video) {
    return <div>Description</div>;
  }
  // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

  return (
    <div>
      <div className="ui embed">
        {/*<iframe src={videoSrc} title="video player" allow="autoplay" />*/}
        <YoutubePlayer videoId={video.id.videoId} onVideoEnd={onVideoEnd} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
