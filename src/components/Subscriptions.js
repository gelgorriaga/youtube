import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/styles.css";
import uuid from "uuid/v1";
import { unsubscribe, removeChannel } from "../actions";
import { bindActionCreators } from "redux";

export class Subscriptions extends Component {
  renderList() {
    if (this.props.channelInfo.length > 0) {
      return this.props.channelInfo.map(channel => {
        return (
          <div className="channelInfo-list" key={uuid()}>
            <img
              className="icon"
              src={channel.thumbnails.medium.url}
              alt="channel thumbnail"
            />
            <div className="channel-title">{channel.title}</div>
                        
            <div className="channel-description">{channel.description}</div>
            <button
              className="unsubscribe-button"
              onClick={() => {
                this.props.unsubscribe(channel.title);
                this.props.removeChannel(channel.title);
              }}
            >
              <i class="far fa-bell-slash fa-1x	"></i>
            </button>
          </div>
        );
      });
    } else {
      return (
        <div className="warning">You haven't subscribed to any channel yet</div>
      );
    }
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { subscription: state.subscription, channelInfo: state.channelInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ unsubscribe, removeChannel }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
