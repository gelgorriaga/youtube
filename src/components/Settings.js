import React from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchViewType from "./SwitchViewType";

const Settings = () => {
  return (
    <div>
      <div className="warning">Settings</div>
      <SwitchTheme />
      <div className="show-render-type">
        <SwitchViewType />
      </div>
    </div>
  );
};

export default Settings;
