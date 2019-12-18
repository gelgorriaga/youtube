import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchPopularVideos, videoSelected } from "../actions";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export class TrendingVideos extends Component {
  componentDidMount() {
    this.props.searchPopularVideos();
    this.props.videoSelected(null);
  }
  render() {
    let { pickVideo } = this.props;

    return (
      <div>
        {pickVideo === null ? (
          <VideoList videos={this.props.fetchData} />
        ) : (
          <VideoDetail video={pickVideo} />
        )}
        <VideoList videos={this.props.popularData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pickVideo: state.videoSelected, popularData: state.popularData };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchPopularVideos, videoSelected }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingVideos);
