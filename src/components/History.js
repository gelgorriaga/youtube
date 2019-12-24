import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import uuid from "uuid/v1";
import VideoItem from "./VideoItem";
export class History extends Component {
  renderList() {
    if (this.props.history.length > 0) {
      return this.props.history.map(history => {
        return (
          <div className="history-list" key={uuid()} >
            <VideoItem video={history} />
            <div className="history-item-description">
              {history.snippet.description}
            </div>
          </div>
        );
      });
    }
  }
  render() {
    let { history } = this.props;
    return (
      <div>
        {history.length === 0 ? (
          <div className="warning">
            {" "}
            You haven't seen any videos yet, please come back when you see any
          </div>
        ) : (
          this.renderList()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { history: state.history };
};
export default connect(mapStateToProps, null)(History);
