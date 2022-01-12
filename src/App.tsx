import { AxiosInstance } from "axios";
import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { VideoDetail } from "./components/VideoDetail";
import { VideoList } from "./components/VideoList";
import YoutubeService from "./services/YoutubeService";

export const App: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const youtubeService: AxiosInstance = YoutubeService.createYoutubeInstance();

  const onTermSubmit = async (term: string): Promise<void> => {
    console.log(`${term} カラオケ`);
    const response = await youtubeService.get("/search", {
      params: {
        q: `${term} カラオケ`,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0] ? response.data.items[0] : null);
  };

  const onVideoSelect = (video: any) => {
    setSelectedVideo(video);
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
      </div>
    </div>
  );
};
