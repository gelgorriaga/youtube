import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import uuid from "uuid/v1";

export class Comments extends Component {
  renderList() {
    if (this.props.comments.length > 0) {
      return this.props.comments.map(comment => {
        return (
          <div className="comment-list" key= {uuid()}>
            <p className="comment-author">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <div className="comment-description">
              {comment.snippet.topLevelComment.snippet.textOriginal}
            </div>
          </div>
        );
      });
    }
  }
  render() {
    let { comments } = this.props;
    return (
      <div>
        {comments.length === 0 ? (
          <div className="warning">
            {" "}
            You haven't seen any videos yet, please come back when you see any
          </div>
        ) : (
          <div>
            <p className="comment-title">Comments</p>
            {this.renderList()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};
export default connect(mapStateToProps, null)(Comments);
