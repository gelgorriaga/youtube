import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, videoSelected } from "../actions";
import { bindActionCreators } from "redux";
import "../css/styles.css";
export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchData(this.state.term);
    this.props.videoSelected(null);
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  returnForm = _ => {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="searchbar-wrapper">
            <input
              className="fa"
              placeholder="&#xf002; Search"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </>
    );
  };

  render() {
    return <>{this.returnForm()}</>;
  }
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData, videoSelected }, dispatch);
};
export default connect(null, mapDispatchToProps)(SearchBar);
