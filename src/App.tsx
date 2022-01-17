import { AxiosInstance, AxiosResponse } from "axios";
import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { VideoDetail } from "./components/VideoDetail";
import { VideoList } from "./components/VideoList";
import YoutubeService from "./services/YoutubeService";
import { Video } from "./types/Video";

export const App: React.FC = () => {
  const [videoSearch, setVideoSearch] = useState<Video[]>([]);
  const [videoHistory, setVideoHistory] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoQueue, setVideoQueue] = useState<Video[]>([]);
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
    let response: AxiosResponse;
    for (let channelId of channelIdStorage) {
      response = await youtubeService.get("/search", {
        params: {
          q: `${term} カラオケ`,
          channelId,
        },
      });
      if (response.data.items) {
        searchResults.push(response.data.items[0]);
      }
    }
    setVideoSearch([...searchResults]);
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
      <SearchForm onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} onVideoEnd={onVideoEnd} />
          </div>
          <div className="five wide column">
            <label>Search Results</label>
            <VideoList onVideoSelect={onVideoSelect} videos={videoSearch} />
          </div>
        </div>
        <div className="ui row">
          <label>Queue</label>
          <VideoList onVideoSelect={onVideoSelectQueue} videos={videoQueue} />
        </div>
        <div className="ui row">
          <label>History</label>
          <VideoList onVideoSelect={onVideoSelect} videos={videoHistory} />
        </div>
      </div>
    </div>
  );
};
