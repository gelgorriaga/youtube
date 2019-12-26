import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import GoogleAuth from "./GoogleAuth";

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="youtube-icon">
          <NavLink exact to="/" activeClassName="Navbar-active">
            <i class="fab fa-youtube fa-3x"></i>
          </NavLink>
        </div>

        <NavLink exact to="/" activeClassName="Navbar-active">
          <div className="flex-icon">
            <div>Home</div>
            <div>
              <i class="fas fa-home"></i>
            </div>
          </div>
        </NavLink>

        <NavLink exact to="/trending" activeClassName="Navbar-active">
          <div className="flex-icon">
            <div>Trending</div>
            <div>
              <i class="fas fa-fire"></i>
            </div>
          </div>
        </NavLink>

        <NavLink exact to="/history" activeClassName="Navbar-active">
          <div className="flex-icon">
            <div>History</div>
            <div>
              <i class="fas fa-history"></i>
            </div>
          </div>
        </NavLink>

        <NavLink exact to="/subscriptions" activeClassName="Navbar-active">
          <div className="flex-icon">
            <div>Subs</div>
            <div>
              <i class="far fa-bell"></i>
            </div>
          </div>
        </NavLink>

        <NavLink exact to="/settings" activeClassName="Navbar-active">
          <div className="flex-icon">
            <div>Settings</div>
            <div>
              <i class="fas fa-cog"></i>
            </div>
          </div>
        </NavLink>

        <GoogleAuth />
      </div>
    </>
  );
};

export default NavBar;
