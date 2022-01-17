import React from "react";
import { Video } from "../types/Video";
import { VideoItem } from "./VideoItem";

type VideoListProps = {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
};

export const VideoList: React.FC<VideoListProps> = (props) => {
  const { videos, onVideoSelect } = props;

  const renderedList = videos.map((video: Video, i: number) => {
    return (
      <VideoItem
        key={video.id.videoId + "-" + i}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
