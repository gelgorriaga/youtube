import React, { Component } from "react";
import { connect } from "react-redux";

import { searchPopularVideos } from "../actions";
import { bindActionCreators } from "redux";
import SwitchTheme from "./SwitchTheme";

import NavBar from "./NavBar";
import History from "./History";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TrendingVideos from './TrendingVideos';
import Home from './Home';

export class App extends Component {
  componentDidMount() {
    this.props.searchPopularVideos();
  }

  render() {
    console.log("video selected", this.props.videoSelected);
    const { videoSelected, theme } = this.props;
    console.log('VIDEO SELECTED ',videoSelected);
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route path="/history" exact component={History} />
          <Route path="/settings" exact component={SwitchTheme} />
          <Route path="/popular" exact component={TrendingVideos} />
        </Switch>
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
