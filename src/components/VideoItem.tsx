import React from "react";
import './VideoItem.css';

export const VideoItem: React.FC<{
  video: any;
  onVideoSelect(video: any): void;
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
