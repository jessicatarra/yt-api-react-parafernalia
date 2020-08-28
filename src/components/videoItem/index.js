import React from 'react';
import styled from 'styled-components';

const VideoItemContainer = styled.div`
  .video-item {
    display: flex !important;
    align-items: center !important;
    cursor: pointer;
  }

  .video-item.item img {
    max-width: 180px;
  }
`

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <VideoItemContainer>
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
    </VideoItemContainer>
    
  );
};
