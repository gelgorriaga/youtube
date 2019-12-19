import React from "react";
import "../css/styles.css";
import VideoList from "./VideoList";
import Comments from "./Comments";
import { connect } from "react-redux";

const VideoDetail = ({ videoSelected, fetchData }) => {
  const videoSrcToRender = () => {
    if (typeof videoSelected.id === "string") {
      return `https://www.youtube.com/embed/${videoSelected.id}`;
    } else {
      return `https://www.youtube.com/embed/${videoSelected.id.videoId}`;
    }
  };

  const videoSrc = videoSrcToRender();

  if (!videoSelected) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home-wrapper">
        <div className="video-wrapper">
          <iframe
            title="video Player"
            src={videoSrc}
            className="video-iframe"
          />
          <p className="video-title">{videoSelected.snippet.title} </p>
          <p className="video-channel-name">
            {videoSelected.snippet.channelTitle}
          </p>
          <p className="video-description">
            {videoSelected.snippet.description}
          </p>
        </div>
        <div className="recommended-videos">
          <VideoList videos={fetchData} amountOfVideos={4} />
        </div>
      </div>
      <Comments />
      </>
    
  );
};

const mapStateToProps = state => {
  return { videoSelected: state.videoSelected, fetchData: state.fetchData };
};

export default connect(mapStateToProps, null)(VideoDetail);
