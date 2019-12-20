import React, { Component } from "react";
import { connect } from "react-redux";

import { searchPopularVideos } from "../actions";
import { bindActionCreators } from "redux";
import Settings from './Settings';

import NavBar from "./NavBar";
import History from "./History";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TrendingVideos from './TrendingVideos';
import Home from './Home';
import VideoDetail from './VideoDetail';

export class App extends Component {
  componentDidMount() {
    this.props.searchPopularVideos();
  }

  render() {

    const { theme } = this.props;
 
    const themeClass = theme === 'DARK' ? 'dark' : 'light'
    return (
      <BrowserRouter>
        <NavBar />
        <div className={`theme ${themeClass}`}>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route path="/history" exact component={History} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/trending" exact component={TrendingVideos} />
          <Route path="/video"  exact component = {VideoDetail} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { theme: state.theme, videoSelected: state.videoSelected };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchPopularVideos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
