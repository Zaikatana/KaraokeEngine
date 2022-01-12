import React from "react";
import { VideoItem } from "./VideoItem";

export const VideoList: React.FC<{
  videos: any[];
  onVideoSelect(video: any): void;
}> = (props) => {
  const { videos, onVideoSelect } = props;

  const renderedList = videos.map((video: any) => {
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
