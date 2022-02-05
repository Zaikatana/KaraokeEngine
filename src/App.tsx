import { AxiosInstance } from "axios";
import React, { useState } from "react";
import { KaraokeTerm, Language, Message } from "./components/enums";
import { SearchForm } from "./components/SearchForm";
import { VideoDetail } from "./components/VideoDetail";
import { VideoMessage } from "./components/VideoMessage";
import { VideoTab } from "./components/VideoTab";
import YoutubeService from "./services/YoutubeService";
import { Video } from "./types/Video";

export const App: React.FC = () => {
  const [videoSearch, setVideoSearch] = useState<Video[]>([]);
  const [videoHistory, setVideoHistory] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [videoQueue, setVideoQueue] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>(Message.EMPTY);

  const onTermSubmit = async (
    term: string,
    source: string,
    language: string
  ): Promise<void> => {
    let searchResults = [];
    const youtubeService: AxiosInstance = YoutubeService.createYoutubeInstance(
      source === "" ? 5 : 10
    );
    let karaokeTerm = "";
    switch (language) {
      case Language.JAPAN:
        karaokeTerm = KaraokeTerm.JAPAN;
        break;
      case Language.KOREA:
        karaokeTerm = KaraokeTerm.KOREA;
        break;
      case Language.CHINESE:
        karaokeTerm = KaraokeTerm.CHINESE;
        break;
      case Language.ENGLISH:
        karaokeTerm = KaraokeTerm.ENGLISH;
        break;
      default:
        break;
    }

    const { data } = await youtubeService.get("/search", {
      params: {
        q: `${term} ${karaokeTerm}`,
        channelId: source,
      },
    });
    if (data.items.length > 0) {
      console.log(data.items);
      searchResults = data.items;
    }
    setVideoSearch([...searchResults]);
  };

  const onTermSubmitContainer = (
    term: string,
    source: string,
    language: string
  ): void => {
    setIsLoading(true);
    onTermSubmit(term, source, language).then(() => {
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
      setMessage(Message.VIDEO_ADDED);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setMessage(Message.EMPTY);
      }, 5000);
    }
  };

  const onVideoSelectQueue = (video: Video) => {
    videoQueue.splice(videoQueue.indexOf(video));
    setVideoQueue([...videoQueue]);
    videoHistory.push(video);
    setVideoHistory([...videoHistory]);
    setSelectedVideo(video);
  };

  const onVideoEnd = (skipped: boolean) => {
    const nextVideo = videoQueue.shift();
    if (nextVideo) {
      videoHistory.push(nextVideo);
      setVideoHistory([...videoHistory]);
      setVideoQueue([...videoQueue]);
      setSelectedVideo(nextVideo);
      if (skipped) {
        setMessage(Message.VIDEO_SKIPPED);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          setMessage(Message.EMPTY);
        }, 5000);
      }
    } else {
      setSelectedVideo(null);
    }
  };

  return (
    <div className="ui container">
      <SearchForm onTermSubmit={onTermSubmitContainer} />
      <VideoMessage showMessage={showMessage} message={message} />
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
