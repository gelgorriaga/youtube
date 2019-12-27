import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { grid, list } from "../actions";

export class SwitchViewType extends Component {
  render() {
    let { list, grid } = this.props;
    return (
      <>
        <div className="warning">Render</div>
        <div className="flex-container">
          <button className="button" onClick={list}>
            List <i class="fas fa-stream"></i>
          </button>
          <button className="button" onClick={grid}>
            Grid <i className="fas fa-th-large"></i>
          </button>
        </div>
      </>
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
