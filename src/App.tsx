import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";

export const App: React.FC = () => {
  const [videos, setVideos] = useState<unknown[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<unknown>(null);

  const onTermSubmit = (term: string): void => {
    console.log(`${term} カラオケ`)
  }

  return (
    <div className="ui container">
      <SearchForm onTermSubmit={onTermSubmit} />
      <h1>Website in Progress</h1>
    </div>
  );
};
