import React, { useEffect } from "react";
import { Video } from "../types/Video";

export const VideoDetail: React.FC<{
  video: Video | null;
  onVideoEnd: () => void;
}> = (props) => {
  const { video, onVideoEnd } = props;
  useEffect(() => {
    onYoutubeIframeAPIReady();
  });

  if (!video) {
    return <div>Description</div>;
  }
  const videoSrc = `${video.id.videoId}`;
  //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

  let player: YT.Player;
  
  const onYoutubeIframeAPIReady = () => {
    player = new YT.Player("player", {
      height: "390",
      width: 640,
      videoId: videoSrc,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event: any) => {
    console.log(event.data);
    if (event.data === YT.PlayerState.ENDED) {
      onVideoEnd();
      player.loadVideoById(videoSrc);
    }
  };

  return (
    <div>
      <div className="ui embed">
        {/*<YouTube title="video player" videoId={videoSrc} onEnd={onVideoEnd} />*/}
        {/*<iframe src={videoSrc} title="video player" />*/}
        <div id="player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
