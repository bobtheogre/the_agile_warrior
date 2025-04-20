import React from "react";

interface YoutubeBackgroundProps {
  videoId: string;
  className?: string;
}

export const YoutubeBackground: React.FC<YoutubeBackgroundProps> = ({ videoId, className }) => {
  return (
    <div className={`youtube-bg-container ${className || ""}`}>
      <iframe
        className="youtube-bg-iframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&showinfo=0&rel=0`}
        title="YouTube video background"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        tabIndex={-1}
      ></iframe>
      <div className="youtube-bg-overlay" />
    </div>
  );
};
