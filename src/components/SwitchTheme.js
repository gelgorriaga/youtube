import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { light, dark } from "../actions";

export class SwitchTheme extends Component {
  render() {
    let { dark, light } = this.props;
    return (
      <>
        <div className="flex-icon padding-top">
          <div>Theme</div>
          <div>
            <i class="fas fa-palette"></i>
          </div>
        </div>
        <div className="flex-container">
          <button className="button dark" onClick={dark}>
            Dark <i class="far fa-moon"></i>
          </button>
          <button className="button light" onClick={light}>
            Light <i class="far fa-sun"></i>
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
