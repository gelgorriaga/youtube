import React from "react";
import "../../css/Toolbar.css";

const DrawerToggleButton = props => {
  return (
    <div>
      <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    </div>
  );
};

export default DrawerToggleButton;
