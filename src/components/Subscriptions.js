import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import uuid from "uuid/v1";

export class Subscriptions extends Component {
  renderList() {
    if (
      this.props.subscription.length > 0 &&
      this.props.subscription !== undefined
    ) {
      return this.props.subscription.map(channel => {
        return (
          <div className="history-list" key={uuid()}>
            <div className="history-item-description">{channel}</div>
          </div>
        );
      });
    }
  }
  render() {
    let { subscription } = this.props;
    console.log(subscription);
    return (
      <div>
        {subscription.length === 0 || subscription === undefined ? (
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
  return { subscription: state.subscription };
};
export default connect(mapStateToProps, null)(Subscriptions);
