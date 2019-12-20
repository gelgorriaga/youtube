import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import GoogleAuth from "./GoogleAuth";

const NavBar = () => {
  return (
    <div className="Navbar">
      <NavLink exact to="/" activeClassName="Navbar-active">
        Home
      </NavLink>
      <NavLink exact to="/trending" activeClassName="Navbar-active">
        Trending
      </NavLink>
      <NavLink exact to="/history" activeClassName="Navbar-active">
        History
      </NavLink>
      <NavLink exact to="/subscriptions" activeClassName="Navbar-active">
        Subscriptions
      </NavLink>
      <NavLink exact to="/settings" activeClassName="Navbar-active">
        Settings
      </NavLink>

      <GoogleAuth />
    </div>
  );
};

export default NavBar;
