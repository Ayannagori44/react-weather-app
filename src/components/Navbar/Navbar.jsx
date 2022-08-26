import React from "react";

import "./Navbar.scss";

import { FiSearch } from "react-icons/fi";
import Avatar from "../../resources/profileavatar/original-c045ce20d30d8297f61523ae982a2fed.webp";

const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <img src={Avatar} alt="user profile" />
        <div className="welcome">
          <h1>Hello,</h1>
          <h2>Jack Grelish</h2>
        </div>
      </div>

      <div className="flex">
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
