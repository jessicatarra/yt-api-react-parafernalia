import React from 'react';
import styled from 'styled-components'

const Gif = styled.div`
  img{
    position: absolute;
    top: 50%;
    margin-top: 0; 
  }
`
const VideoContainer = styled.div`
  cursor: pointer;
  .ui.segment{
    color: var(--black);
    background: var(--white);
    h4{
    color: var(--black);
    }
  }
`
  
  

export default function VideoDetail({ video }) {
  if (!video) {
    return <Gif><img src="https://i.stack.imgur.com/h6viz.gif" alt="loading"/></Gif>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <VideoContainer>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </VideoContainer>
  );
};
