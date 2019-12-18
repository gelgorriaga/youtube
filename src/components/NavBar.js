import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="Navbar">
          <NavLink exact to="/popular" activeClassName="Navbar-active">
        Popular
      </NavLink>
      <NavLink exact to="/" activeClassName="Navbar-active">
        Home
      </NavLink>
      <NavLink exact to="/history" activeClassName="Navbar-active">
        History
      </NavLink>
      <NavLink exact to="/settings" activeClassName="Navbar-active">
        Settings
      </NavLink>
    </div>
  );
};

export default NavBar;
