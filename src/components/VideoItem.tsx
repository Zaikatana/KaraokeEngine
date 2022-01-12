import React from "react";
import { Video } from "../types/Video";
import './VideoItem.css';

export const VideoItem: React.FC<{
  video: Video;
  onVideoSelect(video: Video): void;
}> = (props) => {
  const { video, onVideoSelect } = props;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
