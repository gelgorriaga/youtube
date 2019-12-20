import React from "react";
import "../css/styles.css";
import VideoList from "./VideoList";
import Comments from "./Comments";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { subscribe } from "../actions";

const VideoDetail = ({ videoSelected, fetchData, subscribe }) => {
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
            <button
              onClick={() => subscribe(videoSelected.snippet.channelTitle)}
            >
              Subscribe{" "}
            </button>
          </p>

          <p className="video-description">
            {videoSelected.snippet.description}
          </p>
          <Comments />
        </div>
        <div className="recommended-videos">
          <VideoList videos={fetchData} amountOfVideos={45} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { videoSelected: state.videoSelected, fetchData: state.fetchData };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ subscribe }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
