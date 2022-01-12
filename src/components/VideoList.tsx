import React from "react";
import { Video } from "../types/Video";
import { VideoItem } from "./VideoItem";

export const VideoList: React.FC<{
  videos: Video[];
  onVideoSelect(video: Video): void;
}> = (props) => {
  const { videos, onVideoSelect } = props;

  const renderedList = videos.map((video: Video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
