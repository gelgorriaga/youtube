import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import { NavLink } from "react-router-dom";
import GoogleAuth from '../GoogleAuth';
import "../../css/Toolbar.css";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar-logo">
        <a href="/">
          <i className="fab fa-youtube fa-3x youtube-icon"></i>
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar-navigation-items">
   
        <ul>
        <li>
          <NavLink exact className="link" activeClassName="active" to="/" >
          Search
              </NavLink>
        </li>
        <li>
          <NavLink exact className="link" activeClassName="active" to="/trending">
              Trending
              </NavLink>
        </li>
        <li>
          <NavLink exact className="link" activeClassName="active" to="/settings">
            Settings
              </NavLink>
        </li>
        <li>
          <NavLink exact className="link" activeClassName="active" to="/subscriptions"  >
             Subscriptions
              </NavLink>
        </li>
        <li>
          <NavLink exact className="link" activeClassName="active" to="/history"  >
            History
              </NavLink>
        </li>
        <li><GoogleAuth /></li>
  
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
