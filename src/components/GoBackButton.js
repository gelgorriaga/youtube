import React from "react";
import { withRouter } from "react-router-dom";

const GoBackButton = props => {
  return (
    <div
      className="fas fa-long-arrow-alt-left go-back-button"
      onClick={() => props.history.goBack()}
    />
  );
};

export default withRouter(GoBackButton);
