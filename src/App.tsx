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

  const channelIdStorage = [
    "UC1tk9F5-MGXEq4LWnjmrtpA",
    "UCZXOq4XxCsSL7VPtXUU435w",
    "UCZ3ryrdsdqezi2q-AfRw6Rw",
    "UCuhnZ_NxJ8Yhuhv_t7P7GnA",
    "",
  ];

  const onTermSubmit = async (term: string): Promise<void> => {
    const searchResults = [];
    for (let channelId of channelIdStorage) {
      const { data } = await youtubeService.get("/search", {
        params: {
          q: `${term} カラオケ`,
          channelId,
        },
      });
      if (data.items) {
        searchResults.push(data.items[0]);
      }
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
