import React, { useEffect } from "react";

export const YoutubePlayer: React.FC<{
  videoId: string;
  onVideoEnd: () => void;
}> = (props) => {
  const { videoId, onVideoEnd } = props;
  let player: YT.Player;
  console.log(videoId);

  const onPlayerReady = (event: any) => {
    player.loadVideoById(videoId);
    event.target.playVideo();
  };

  const onStateChange = (event: any) => {
    if (event.data === YT.PlayerState.ENDED) {
      onVideoEnd();
    }
  }

  const onYoutubeIframeAPIReady = () => {
    player = new YT.Player("player", {
      height: 390,
      width: 640,
      events: {
        onReady: onPlayerReady,
        onStateChange,
      },
    });
  };

  useEffect(() => {
    onYoutubeIframeAPIReady();
  });

  return <div id="player" />;
};
