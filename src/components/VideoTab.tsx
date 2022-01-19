/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Video } from "../types/Video";
import { VideoList } from "./VideoList";

export const VideoTab: React.FC<{
  onVideoSelect: (video: Video) => void;
  onVideoSelectQueue: (video: Video) => void;
  videoSearch: Video[];
  videoQueue: Video[];
  videoHistory: Video[];
  isLoading: boolean;
}> = (props) => {
  const [currentTab, setCurrentTab] = useState<string>("search");
  const {
    onVideoSelect,
    onVideoSelectQueue,
    videoSearch,
    videoQueue,
    videoHistory,
    isLoading,
  } = props;

  return (
    <>
      <div className="ui top attached tabular menu">
        <a
          className={currentTab === "search" ? "active item" : "item"}
          data-tab="search"
          onClick={() => setCurrentTab("search")}
        >
          Search Results
        </a>
        <a
          className={currentTab === "queue" ? "active item" : "item"}
          data-tab="queue"
          onClick={() => setCurrentTab("queue")}
        >
          Queue
        </a>
        <a
          className={currentTab === "history" ? "active item" : "item"}
          data-tab="history"
          onClick={() => setCurrentTab("history")}
        >
          History
        </a>
      </div>
      <div
        className={`ui bottom attached tab segment ${
          isLoading ? "loading" : ""
        } ${currentTab === "search" ? "active" : ""}`}
        data-tab="search"
      >
        <VideoList onVideoSelect={onVideoSelect} videos={videoSearch} />
      </div>
      <div
        className={`ui bottom attached tab segment ${
          currentTab === "queue" ? "active" : ""
        }`}
        data-tab="queue"
      >
        <VideoList onVideoSelect={onVideoSelectQueue} videos={videoQueue} />
      </div>
      <div
        className={`ui bottom attached tab segment ${
          currentTab === "history" ? "active" : ""
        }`}
        data-tab="history"
      >
        <VideoList onVideoSelect={onVideoSelect} videos={videoHistory} />
      </div>
    </>
  );
};
