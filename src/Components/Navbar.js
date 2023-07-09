import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <NavLink exact to="/" className="nav-logo">
          ARACHNOMESH
        </NavLink>
      </div>
      <div className="nav-container">
        <NavLink className="nav-items" to="/" exact>
          Home
        </NavLink>
        <NavLink className="nav-items" to="/about">
          About
        </NavLink>
        <NavLink className="nav-items" to="/bottles">
          Bottles
        </NavLink>
        <NavLink className="nav-items" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-items" to="/about">
          About
        </NavLink>
        <NavLink className="nav-items-login" to="/login">
          <div className="login">Login</div>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
