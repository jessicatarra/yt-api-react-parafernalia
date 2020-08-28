import React, { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import  VideoList from '../components/videoList';
import VideoDetail  from '../components/videoDetail';
import useVideos from '../hooks/useVideos';


export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('Lo fi music');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return(
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui computer only grid">
        <div className="ui row">
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
        </div>
      </div>
      <div className="ui tablet only grid">
        <div className="ui row">
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
        </div>
      </div>
      <div className="ui mobile only grid">
        <div className="ui stackable row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>          
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};


