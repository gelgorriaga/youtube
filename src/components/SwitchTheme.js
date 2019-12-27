import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { light, dark } from "../actions";

export class SwitchTheme extends Component {
  render() {
    let { dark, light } = this.props;
    return (
      <>
        <div className="warning">Theme</div>
        <div className="flex-container">
          <button className="button dark" onClick={dark}>
            Dark <i className="far fa-moon"></i>
          </button>
          <button className="button light" onClick={light}>
            Light <i className="far fa-sun"></i>
          </button>
        </div>
      </>
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
