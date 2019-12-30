import React, { Component } from "react";
import { connect } from "react-redux";

import { searchPopularVideos, fetchData } from "../actions";
import { bindActionCreators } from "redux";
import Settings from "./Settings";

import NavBar from "./NavBar";
import History from "./History";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TrendingVideos from "./TrendingVideos";
import Home from "./Home";
import VideoDetail from "./VideoDetail";
import Subscriptions from "./Subscriptions";
import Toolbar from "./toolbar/Toolbar";
import SideDrawer from "./toolbar/SideDrawer";
import BackDrop from "./toolbar/BackDrop";
export class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  componentDidMount() {
    this.props.searchPopularVideos();
    this.props.fetchData("react redux");
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };

  render() {
    const { theme } = this.props;
    const themeClass = theme === "DARK" ? "dark" : "light";
    let backDrop;

    if (this.state.sideDrawerOpen) {

      backDrop = <BackDrop click={this.backDropClickHandler} />
    }
    return (
      <BrowserRouter>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div className={`theme ${themeClass}`}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" exact component={History} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/trending" exact component={TrendingVideos} />
            <Route path="/video" exact component={VideoDetail} />
            <Route path="/subscriptions" exact component={Subscriptions} />
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
  return bindActionCreators({ searchPopularVideos, fetchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
