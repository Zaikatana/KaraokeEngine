import { AxiosInstance } from "axios";
import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { VideoDetail } from "./components/VideoDetail";
import { VideoList } from "./components/VideoList";
import YoutubeService from "./services/YoutubeService";
import { Video } from "./types/Video";

export const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoHistory, setVideoHistory] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const youtubeService: AxiosInstance = YoutubeService.createYoutubeInstance();

  // UC1tk9F5-MGXEq4LWnjmrtpA
  // UCZXOq4XxCsSL7VPtXUU435w
  // UCZ3ryrdsdqezi2q-AfRw6Rw
  // UCuhnZ_NxJ8Yhuhv_t7P7GnA

  const onTermSubmit = async (term: string): Promise<void> => {
    const response = await youtubeService.get("/search", {
      params: {
        q: `${term} カラオケ`,
      },
    });

    setVideos(response.data.items);
    videoHistory.push(response.data.items[0] ? response.data.items[0] : null);
    setVideoHistory(videoHistory);
    setSelectedVideo(response.data.items[0] ? response.data.items[0] : null);
  };

  const onVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    videoHistory.push(video);
    setVideoHistory(videoHistory);
  };

  return (
    <div className="ui container">
      <SearchForm onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
        <div className="ui row">
          <VideoList onVideoSelect={onVideoSelect} videos={videoHistory} />
        </div>
      </div>
    </div>
  );
};
