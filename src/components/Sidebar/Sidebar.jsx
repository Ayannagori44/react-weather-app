import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import { BiChart } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

import Logo from "../../resources/logo-light.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="sidebar-links">
        <NavLink className="side-link" to={"/"}>
          <BiChart />
        </NavLink>
        <NavLink className="side-link" to={"map"}>
          <BiMap />
        </NavLink>
        <NavLink className="side-link" to={"account"}>
          <MdAccountCircle />
        </NavLink>
      </div>
    </div>
  );
};
export default Sidebar;
