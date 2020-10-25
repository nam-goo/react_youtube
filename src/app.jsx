import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCqHy77mcUDEh_wx9Aj6qJYANmAiKm7D2o',
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setVideos(result.items);
      })
      .catch(error => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
