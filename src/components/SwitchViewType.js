import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { grid, list } from "../actions";

export class SwitchViewType extends Component {
  render() {
    let { list, grid } = this.props;
    return (
      <div>
        <div>Change how does videos render</div>
        <button className="button" onClick={list}>
          List
        </button>
        <button className="button" onClick={grid}>
          grid
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    viewType: state.viewType
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ list, grid }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchViewType);
