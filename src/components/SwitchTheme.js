import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { light, dark } from "../actions";

export class SwitchTheme extends Component {
  render() {
    let { dark, light } = this.props;
    return (
      <div>
        <div>Theme</div>
        <button className="button" onClick={dark}>
          dark
        </button>
        <button className="button" onClick={light}>
          light
        </button>
      </div>
    );
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
