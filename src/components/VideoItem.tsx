import React from "react";
import { Video } from "../types/Video";
import "./css/VideoItem.css";

type VideoItemProps = {
  video: Video;
  onVideoSelect: (video: Video) => void;
};

export const VideoItem: React.FC<VideoItemProps> = (props) => {
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

export const VideoItemEmpty: React.FC = () => {
  return (
    <div className="video-item item">
      <div className="content">
        <div className="header">
          Nothing in list! Search for songs using the search bar above!
        </div>
      </div>
    </div>
  );
};
