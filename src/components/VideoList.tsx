import React from "react";
import { Video } from "../types/Video";
import { VideoItem, VideoItemEmpty } from "./VideoItem";
import "./css/VideoList.css";

type VideoListProps = {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
};

export const VideoList: React.FC<VideoListProps> = (props) => {
  const { videos, onVideoSelect } = props;

  if (videos.length === 0) {
    return (
      <div className="video-list ui relaxed divided list">
        <VideoItemEmpty />
      </div>
    );
  }

  const renderedList = videos.map((video: Video, i: number) => {
    return (
      <VideoItem
        key={video.id.videoId + "-" + i}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return (
    <div className="video-list ui relaxed divided list">{renderedList}</div>
  );
};
