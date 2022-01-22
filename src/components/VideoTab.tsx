/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Video } from "../types/Video";
import { Tab } from "./enums";
import { VideoList } from "./VideoList";

type VideoTabProps = {
  onVideoSelect: (video: Video) => void;
  onVideoSelectQueue: (video: Video) => void;
  videoSearch: Video[];
  videoQueue: Video[];
  videoHistory: Video[];
  isLoading: boolean;
};

export const VideoTab: React.FC<VideoTabProps> = (props) => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.SEARCH);
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
          className={currentTab === Tab.SEARCH ? "active item" : "item"}
          data-tab={Tab.SEARCH}
          onClick={() => setCurrentTab(Tab.SEARCH)}
        >
          Search Results
        </a>
        <a
          className={currentTab === Tab.QUEUE ? "active item" : "item"}
          data-tab={Tab.QUEUE}
          onClick={() => {
            if (!isLoading) {
              setCurrentTab(Tab.QUEUE);
            }
          }}
        >
          Queue
        </a>
        <a
          className={currentTab === Tab.HISTORY ? "active item" : "item"}
          data-tab={Tab.HISTORY}
          onClick={() => {
            if (!isLoading) {
              setCurrentTab(Tab.HISTORY);
            }
          }}
        >
          History
        </a>
      </div>
      <div
        className={`ui bottom attached tab segment ${
          isLoading ? "loading" : ""
        } ${currentTab === Tab.SEARCH ? "active" : ""}`}
        data-tab={Tab.SEARCH}
      >
        <VideoList onVideoSelect={onVideoSelect} videos={videoSearch} />
      </div>
      <div
        className={`ui bottom attached tab segment ${
          currentTab === Tab.QUEUE ? "active" : ""
        }`}
        data-tab={Tab.QUEUE}
      >
        <VideoList onVideoSelect={onVideoSelectQueue} videos={videoQueue} />
      </div>
      <div
        className={`ui bottom attached tab segment ${
          currentTab === Tab.HISTORY ? "active" : ""
        }`}
        data-tab={Tab.HISTORY}
      >
        <VideoList onVideoSelect={onVideoSelect} videos={videoHistory} />
      </div>
    </>
  );
};
