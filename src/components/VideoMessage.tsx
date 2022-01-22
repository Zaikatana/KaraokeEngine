import React from "react";

type VideoMessageProps = {
  message: string;
  showMessage: boolean;
};

export const VideoMessage: React.FC<VideoMessageProps> = (props) => {
  const { message, showMessage } = props;

  return (
    <div className={`ui message ${showMessage ? "" : "hidden"}`}>
      <div className="header">{message}</div>
    </div>
  );
};
