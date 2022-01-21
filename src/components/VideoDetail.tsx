import React from "react";
import { Video } from "../types/Video";
import { YoutubePlayer } from "./YoutubePlayer";

type VideoDetailProps = {
  video: Video | null;
  onVideoEnd: () => void;
};

export const VideoDetail: React.FC<VideoDetailProps> = (props) => {
  const { video, onVideoEnd } = props;
  console.log(video?.id.videoId);

  if (!video) {
    return (
      <div>
        <div className="ui embeded">
          <img
            height="390"
            width="100%"
            src="https://api.time.com/wp-content/uploads/2019/09/karaoke-mic.jpg?w=800&quality=85"
            alt="..."
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">No video playing.</h4>
          <p>Start searching for a song on the search bar above!</p>
        </div>
      </div>
    );
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
