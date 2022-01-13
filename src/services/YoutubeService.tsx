import axios, { AxiosInstance } from "axios";
const { REACT_APP_KEY } = process.env;

export default class YoutubeService {
  static createYoutubeInstance(): AxiosInstance {
    return axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
      params: {
        part: "snippet",
        maxResults: 5,
        key: REACT_APP_KEY,
      },
    });
  }
}
