import React from "react";
 import "../css/styles.css";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {videoSelected, videoWatched} from '../actions'

const VideoItem = ({ video, videoSelected, videoWatched }) => {
  const { snippet } = video;

    const videoClick = _ => {
        videoSelected(video);
        videoWatched(snippet.title)
    }

  return (
    <div onClick={videoClick} className="video-item item">
      <img
        alt={snippet.title}
        src={snippet.thumbnails.medium.url}
      />

      <div className="header">{snippet.title}</div>
    </div>
  );
};


const mapDispatchToProps = dispatch =>{
    return  bindActionCreators({ videoSelected, videoWatched}, dispatch);
}
export default connect(null, mapDispatchToProps)(VideoItem);
