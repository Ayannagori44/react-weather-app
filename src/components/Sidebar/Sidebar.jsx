import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { useLocation } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

import Logo from "../../resources/logo-light.png";

const Sidebar = () => {
  const { Active, setActive } = useState();

  const currentLocation = window.location.pathname;
  console.log(currentLocation);

  const handleClick = (e) => {
    e.target.style.bacgroundColor = "var(--primary-color)";
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top-logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="sidebar-links">
        <li>
          <Link
            onClick={(e) => handleClick}
            className="side-link Active"
            to={"/"}
          >
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link onClick={(e) => handleClick} className="side-link" to={"map"}>
            <BiMap />
          </Link>
        </li>
        <li>
          <Link
            onClick={(e) => handleClick}
            className="side-link"
            to={"account"}
          >
            <MdAccountCircle />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
