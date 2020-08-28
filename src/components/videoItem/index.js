import React from 'react';


export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item" >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
