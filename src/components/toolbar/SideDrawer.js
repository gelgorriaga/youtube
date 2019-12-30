import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import "../../css/Toolbar.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink exact to="/" className="link" activeClassName="link-active">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/trending"
            className="link"
            activeClassName="link-active"
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/settings"
            className="link"
            activeClassName="link-active"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/subscriptions"
            className="link"
            activeClassName="link-active"
          >
            Subscriptions
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/history"
            className="link"
            activeClassName="link-active"
          >
            History
          </NavLink>
        </li>
        <li>
          <GoogleAuth />
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
