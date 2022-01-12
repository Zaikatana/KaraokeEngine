export type Video = {
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: VideoSnippet;
};

export type VideoSnippet = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: VideoThumbnail;
  title: string;
};

export type VideoThumbnail = {
  medium: {
    url: string;
    width: number;
    height: number;
  };
};
