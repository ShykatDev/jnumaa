import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logoSection">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="menuSection">
        <div className="desktopMenu">
          <ul>
            <li className="active">Home</li>
            <li>About Us</li>
            <li>Events</li>
            <li>Contributions</li>
            <li>Contact</li>
          </ul>

          <button className="loginBtn">login</button>
        </div>
        <div className="mobileMenu"></div>
      </div>
    </div>
  );
};

export default Navbar;
