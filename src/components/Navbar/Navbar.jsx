import React from "react";

import "./Navbar.css";
import profile from "../../resources/logo-circle.png";

import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <div className="profile">
        <img
          src={
            "https://cdn.dribbble.com/users/823181/screenshots/6866583/dreamland_illustrations_4x.png?compress=1&resize=768x576&vertical=top"
          }
          alt="user profile"
        />
        <div className="welcome">
          <h1>Hello,</h1>
          <h2>Jack Grelish</h2>
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="Search City..." />
        <FiSearch
          style={{
            color: "var(--primary-color)",
            fontSize: "22px",
            transform: "translateX(-150%)",
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
