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
    const { theme, videoSelected } = this.props;
    console.log('FETCH DATA DESDE HOME', this.props.fetchData);
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
  return { theme: state.theme, videoSelected: state.videoSelected, fetchData: state.fetchData };
};
const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchData }, dispatch);
return bindActionCreators({ searchVideos:fetchData , dispatchVideoSelected:videoSelected}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
