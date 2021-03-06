import React from "react";
import "../css/styles.css";
import VideoList from "./VideoList";
import Comments from "./Comments";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { subscribe, unsubscribe, channelInfo, removeChannel } from "../actions";
import GoBackButton from "./GoBackButton";

const VideoDetail = ({
  videoSelected,
  fetchData,
  subscribe,
  unsubscribe,
  subscription,
  channelInfo,
  removeChannel
}) => {
  const doSubscribe = _ => {
    subscribe(videoSelected.snippet.channelTitle);
    channelInfo(videoSelected.snippet.channelId);
  };

  const doUnsubscribe = _ => {
    unsubscribe(videoSelected.snippet.channelTitle);
    removeChannel(videoSelected.snippet.channelTitle);
  };
  const displaySubscribeButton = video => {
    if (subscription.includes(video)) {
      return (
        <button onClick={doUnsubscribe}>
          Unsubscribe <i className="far fa-bell-slash"></i>
        </button>
      );
    } else {
      return (
        <button onClick={doSubscribe}>
          Subscribe <i className="far fa-bell"></i>
        </button>
      );
    }
  };

  const videoSrcToRender = _ => {
    if (typeof videoSelected.id === "string") {
      return `https://www.youtube.com/embed/${videoSelected.id}`;
    } else {
      return `https://www.youtube.com/embed/${videoSelected.id.videoId}`;
    }
  };

  const renderVideoDetail = _ => {
    const videoSrc = videoSrcToRender();
    return (
      <>
       
      <div className="home-wrapper margin">
        <div className="video-wrapper">
        <GoBackButton />
          <iframe
            title="video Player"
            allowfullscreen="0"
            src={videoSrc}
            className="video-iframe"
          />
          <p className="video-title">{videoSelected.snippet.title} </p>
          <span className="video-channel-name">
            {videoSelected.snippet.channelTitle}
            <span className="normal-button">
          {displaySubscribeButton(videoSelected.snippet.channelTitle)}
          </span>
          </span>

          
          

          <p className="video-description">
            {videoSelected.snippet.description}
          </p>
          <Comments />
        </div>
        <div className="recommended-videos">
          <VideoList videos={fetchData} amountOfVideos={15} />
        </div>
      </div>
      </>
    );
  };

  return <>{renderVideoDetail()}</>;
};

const mapStateToProps = state => {
  return {
    subscription: state.subscription,
    videoSelected: state.videoSelected,
    fetchData: state.fetchData,
    channelInfoData: state.channelInfo
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { subscribe, unsubscribe, channelInfo, removeChannel },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);
