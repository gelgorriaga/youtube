import React, { Component } from "react";
import VideoItem from "./VideoItem";
import "../css/styles.css";
import { connect } from "react-redux";
import uuid from 'uuid/v1';

export class VideoList extends Component {
  render() {
    
    const { amountOfVideos, videos, viewType } = this.props;

    let renderedList;
    const videoProps = amountOfVideos !== undefined;

    if (videos !== undefined && Object.keys(videos).length > 0) {
      renderedList = videos.map(video => {
        return <VideoItem key={uuid()} video={video} />;
      });
    }

    if (renderedList !== undefined && videoProps) {
      renderedList = renderedList.slice(1, amountOfVideos);
    }

    //render as a list
    if (viewType === 'LIST'){
        return videos.map(video => {
            return (
              
                <div className="history-list"> 
                <VideoItem key={uuid()} video={video} />
                <div className="history-item-description">{video.snippet.description}</div>
                </div>
          
            );
          });
    }
    return <div className="video-list">{renderedList}</div>;
  }
}

const mapStateToProps = state => {

  return { fetchData: state.fetchData, popularData: state.popularData, viewType: state.viewType };
};

export default connect(mapStateToProps, null)(VideoList);
