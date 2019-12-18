import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { light, dark } from "../actions";

export class SwitchTheme extends Component {
  render() {
    return (<div>
        <div>WORK IN PROGRESS HERE!</div>
        <button onClick={this.props.dark}>dark</button>
        <button onClick={this.props.light}>light</button>
    </div>);
  }
}
const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ dark, light }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchTheme);
