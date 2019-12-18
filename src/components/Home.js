import React, { Component } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { fetchData, videoSelected } from "../actions";
import { bindActionCreators } from "redux";
import {connect} from 'react-redux'
export class Home extends Component {
    componentDidMount() {
        this.props.searchVideos('react redux');
        this.props.dispatchVideoSelected(null);
    }
    
  render() {
    const {  videoSelected } = this.props;
    return (
      <div>
  
        <SearchBar />
        <div className = "home-wrapper">
        {videoSelected === null ? (
          <VideoList videos = {this.props.fetchData}/>
        ) : (
          <VideoDetail video={videoSelected} />
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {  videoSelected: state.videoSelected, fetchData: state.fetchData };
};
const mapDispatchToProps = dispatch => {

return bindActionCreators({ searchVideos:fetchData , dispatchVideoSelected:videoSelected}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
