import React from "react";

import { BsFillSunFill } from "react-icons/bs";

import chart from "../../resources/chart.png";

import "./Aside.scss";

const Aside = () => {
  return (
    <div className="Aside">
      <div className="top row">
        <div className="side">
          <h1>Sun</h1>
          <h2>Delhi, India</h2>
        </div>
        <span>22°C</span>
      </div>
      <div className="middle">
        <div className="chart">
          <img src={chart} alt="" />
        </div>
        <div className="uv flex">
          <BsFillSunFill
            style={{
              color: "var(--primary-color)",
              fontSize: "3.5rem",
              marginRight: "1.2rem",
            }}
          />
          <div className="uv-details">
            <h1 className="badge-heading">
              20 UVI <span className="badge">Moderate</span>
            </h1>
            <p>Moderate risk from UV rays</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
