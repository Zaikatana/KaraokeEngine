import { AxiosInstance } from "axios";
import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { VideoDetail } from "./components/VideoDetail";
import { VideoTab } from "./components/VideoTab";
import YoutubeService from "./services/YoutubeService";
import { Video } from "./types/Video";

export const App: React.FC = () => {
  const [videoSearch, setVideoSearch] = useState<Video[]>([]);
  const [videoHistory, setVideoHistory] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoQueue, setVideoQueue] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const youtubeService: AxiosInstance = YoutubeService.createYoutubeInstance();

  const onTermSubmit = async (term: string): Promise<void> => {
    const searchResults = [];
    const { data } = await youtubeService.get("/search", {
      params: {
        q: `${term} カラオケ`,
      },
    });
    if (data.items.length > 0) {
      searchResults.push(data.items);
    }
    setVideoSearch([...searchResults]);
  };

  const onTermSubmitContainer = (term: string): void => {
    setIsLoading(true);
    onTermSubmit(term).then(() => {
      setIsLoading(false);
    });
  };

  const onVideoSelect = (video: Video) => {
    if (!selectedVideo) {
      videoHistory.push(video);
      setVideoHistory([...videoHistory]);
      setSelectedVideo(video);
    } else {
      videoQueue.push(video);
      setVideoQueue([...videoQueue]);
    }
  };

  const onVideoSelectQueue = (video: Video) => {
    videoQueue.shift();
    setVideoQueue([...videoQueue]);
    videoHistory.push(video);
    setVideoHistory([...videoHistory]);
    setSelectedVideo(video);
  };

  const onVideoEnd = () => {
    const nextVideo = videoQueue.shift();
    if (nextVideo) {
      videoHistory.push(nextVideo);
      setVideoHistory([...videoHistory]);
      setVideoQueue([...videoQueue]);
      setSelectedVideo(nextVideo);
    }
  };

  return (
    <div className="ui container">
      <SearchForm onTermSubmit={onTermSubmitContainer} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} onVideoEnd={onVideoEnd} />
          </div>
          <div className="five wide column">
            <VideoTab
              onVideoSelect={onVideoSelect}
              onVideoSelectQueue={onVideoSelectQueue}
              videoHistory={videoHistory}
              videoQueue={videoQueue}
              videoSearch={videoSearch}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
