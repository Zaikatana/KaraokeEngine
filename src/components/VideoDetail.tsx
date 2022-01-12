import React from "react";
import { Video } from "../types/Video";

export const VideoDetail: React.FC<{video: Video | null}> = (props) => {
    const { video } = props;
    
    if (!video) {
        return <div>Description</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}