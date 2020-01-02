import React from "react";
import "../css/styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { videoSelected, videoWatched, videoComment } from "../actions";
import { withRouter } from "react-router-dom";

const VideoItem = ({
  video,
  videoSelected,
  videoWatched,
  history,
  videoComment
}) => {
  const { snippet } = video;

  const videoClick = _ => {
    videoSelected(video);
    videoWatched(video);
    typeof video.id.videoId === "string"
      ? videoComment(video.id.videoId)
      : videoComment(video.id);
    window.scroll({ top: 0, left: 0, behavior: "auto" });
    typeof video.id.videoId === "string"
      ? history.push(`/video?id=${video.id.videoId}`)
      : history.push(`/video?id=${video.id}`);
  };

  return (
    <div onClick={videoClick} className="video-item item">
      <img
        className="thumbnail"
        alt={snippet.title}
        src={snippet.thumbnails.medium.url}
      />

      <div className="header">{snippet.title}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { videoSelected, videoWatched, videoComment },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(withRouter(VideoItem));
