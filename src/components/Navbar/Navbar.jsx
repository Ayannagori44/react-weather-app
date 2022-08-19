import React from "react";

import "./Navbar.css";
import profile from "../../resources/logo-circle.png";

import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div className="profile">
        <img src={profile} alt="user profile" />
        <div className="welcome">
          <h1>Hello,</h1>
          <h2>Saif Gehlot</h2>
        </div>
      </div>

      <div className="search">
        <input type="text" />
        <FiSearch />
      </div>
    </nav>
  );
};

export default Navbar;
