import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchPopularVideos, videoSelected } from "../actions";
import VideoList from "./VideoList";

export class TrendingVideos extends Component {
  componentDidMount() {
    this.props.searchPopularVideos();
    this.props.videoSelected(null);
  }
  render() {
    return (
      <>
        <VideoList videos={this.props.popularData} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { popularData: state.popularData };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchPopularVideos, videoSelected }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingVideos);
