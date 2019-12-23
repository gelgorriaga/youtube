import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import uuid from "uuid/v1";
import { unsubscribe } from "../actions";
import { bindActionCreators } from "redux";
export class Subscriptions extends Component {
  renderList() {
    if (
      this.props.subscription.length > 0 &&
      this.props.subscription !== undefined
    ) {
      return this.props.subscription.map(channel => {
        console.log('chann',channel);
        return (
          <div className="subscription-list" key={uuid()}>
            <div className="history-item-description">{channel}</div>
    
              <button onClick={() => this.props.unsubscribe(channel)}>Unsubscribe</button>
   
          </div>
        );
      });
    }
  }
  render() {
    let { subscription } = this.props;
    return (
      <div>
        {subscription.length === 0 || subscription === undefined ? (
          <div className="warning">
            {" "}
            You haven't subscribed to any channel yet
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ unsubscribe }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
