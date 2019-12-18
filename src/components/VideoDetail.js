import React from "react";
import "../css/styles.css";
import VideoList from "./VideoList";
import { connect } from "react-redux";

const VideoDetail = ({ videoSelected, theme, fetchData }) => {
  if (!videoSelected) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${videoSelected.id.videoId}`;
  return (
      <>
    <div className="video-wrapper">
      <iframe title="video Player" src={videoSrc} className="video-iframe" />
      <p className="video-title">{videoSelected.snippet.title} </p>
      <p className="video-channel-name">{videoSelected.snippet.channelTitle}</p>
      <p className="video-description">{videoSelected.snippet.description}</p>
    </div>
          <div className="recommended-videos">
          <VideoList videos = {fetchData} amountOfVideos={4} />
        </div>
        </>
  );
};

const mapStateToProps = state => {
  return { theme: state.theme, videoSelected: state.videoSelected, fetchData: state.fetchData };
};

export default connect(mapStateToProps, null)(VideoDetail);
