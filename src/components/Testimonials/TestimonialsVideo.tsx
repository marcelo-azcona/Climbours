import React from 'react';
import videoBackgroundMP4 from '../../assets/img/video.mp4';
import videoBackgroundWEBM from '../../assets/img/video.mp4';
import './TestimonialsVideo.scss';

const TestimonialVideo = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={videoBackgroundMP4} type="video/mp4" />
        <source src={videoBackgroundWEBM} type="video/webm" />
        Your Browser is not supported!
      </video>
    </div>
  );
};

export default TestimonialVideo;
