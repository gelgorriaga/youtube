import React from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchViewType from "./SwitchViewType";

const Settings = _ => {
  return (
    <div className="margin">
      <div className="warning">Settings</div>
      <SwitchTheme />
      <div className="show-render-type">
        <SwitchViewType />
      </div>
    </div>
  );
};

export default Settings;
