// src/Components/VideoSection.js
import React from 'react';
import './VideoSection.css';
import videoSrc from './assets/videos/explore.mp4'; // Adjusted path

const VideoSection = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-content">
        <h1>Explore the World</h1>
        <p>Your adventure starts here. Find the best experiences and activities.</p>
        <button>Discover More</button>
      </div>
    </div>
  );
};

export default VideoSection;
