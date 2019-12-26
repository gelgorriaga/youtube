import React from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchViewType from "./SwitchViewType";

const Settings = () => {
  return (
    <div>
      <div className="warning">Settings</div>
      <SwitchTheme />
      <SwitchViewType />
    </div>
  );
};

export default Settings;
