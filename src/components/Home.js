import React, { Component } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import { fetchData, videoSelected } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
export class Home extends Component {
  componentDidMount() {
    this.props.searchVideos("react redux");
    this.props.dispatchVideoSelected(null);
  }

  render() {
    return (
      <>
        <SearchBar />
        <VideoList videos={this.props.fetchData} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return { fetchData: state.fetchData };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { searchVideos: fetchData, dispatchVideoSelected: videoSelected },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
