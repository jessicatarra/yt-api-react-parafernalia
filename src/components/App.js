import React, { useState, useEffect } from 'react';
import '../../src/style/App.css'
import Header from '../components/header';
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


  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])



  return(
    <main className={mainClass}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="ui container">
        <SearchBar onFormSubmit={search} />
        {/*Semantic UI Responsive Devise Computer only*/}
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
        {/*Semantic UI Responsive Devise tablet only*/}
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
        {/*Semantic UI Responsive Devise mobile only*/}
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
    </main> 
  );
};


