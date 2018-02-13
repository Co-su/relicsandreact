import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Nav = () =>
<nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Relics and React CoC
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={window.location.pathname === "/hubworld" ? "active" : ""}>
          <Link to="/hubworld">HubLanta</Link>
        </li>
        <li className={window.location.pathname === "/forest" ? "active" : ""}>
          <Link to="/forest">Forest</Link>
        </li>
        <li className={window.location.pathname === "/tavern" ? "avtice" : ""}>
          <Link to="/tavern">Tavern</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Nav;