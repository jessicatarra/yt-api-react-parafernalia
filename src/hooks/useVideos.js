import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
      },
    });
    
    setVideos(response.data.items);
  };

  return [videos, search];
};
