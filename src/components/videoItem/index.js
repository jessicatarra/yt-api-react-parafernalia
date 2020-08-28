import React from 'react';
import styled from 'styled-components';

const VideoItemContainer = styled.div`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  margin-bottom: 1em;
  align-items: center;
    &:hover .video-item{
    border: 1px solid var(--black);
    border-radius: 5px;
  .video-item {
    border: 1px solid transparent;
    transition: .3s border;
    background: var(--white);
    
  }
  .video-item img{
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }
`

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <VideoItemContainer>
      <div onClick={() => onVideoSelect(video)} className="video-item" >
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
