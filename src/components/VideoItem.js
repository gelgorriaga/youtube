import React from "react";
import "../css/styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { videoSelected, videoWatched, videoComment } from "../actions";
import { withRouter } from "react-router-dom";

const VideoItem = ({ video, videoSelected, videoWatched, history, videoComment }) => {
  const { snippet } = video;

  const videoClick = _ => {
    videoSelected(video);
    videoWatched(video);
    videoComment(video.id.videoId);
    history.push("/video");
  };

  return (
    <div onClick={videoClick} className="video-item item">
      <img alt={snippet.title} src={snippet.thumbnails.medium.url} />

      <div className="header">{snippet.title}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ videoSelected, videoWatched, videoComment }, dispatch);
};
export default connect(null, mapDispatchToProps)(withRouter(VideoItem));
