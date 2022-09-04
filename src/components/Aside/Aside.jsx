import React from "react";

import { BsFillSunFill } from "react-icons/bs";

import clear from "../../resources/weathericon/clear.png";
import wind from "../../resources/weathericon/wind.png";
import hail from "../../resources/weathericon/hail.png";
import snow from "../../resources/weathericon/snow.png";
import fog from "../../resources/weathericon/fog.png";
import rain from "../../resources/weathericon/rain.png";

import chart from "../../resources/chart.png";

import "./Aside.scss";

const Aside = () => {
  const weeklyData = [
    {
      weather: "Cloudy",
      date: "November 16",
      image: clear,
    },
    {
      weather: "Cloudy",
      date: "November 17",
      image: rain,
    },
    {
      weather: "Cloudy",
      date: "November 18",
      image: fog,
    },
    {
      weather: "Cloudy",
      date: "November 19",
      image: hail,
    },
    {
      weather: "Cloudy",
      date: "November 20",
      image: clear,
    },
    {
      weather: "Cloudy",
      date: "November 21",
      image: rain,
    },
    {
      weather: "Cloudy",
      date: "November 22",
      image: wind,
    },
  ];

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
      <div className="bottom">
        <h1>Weather Prediction</h1>

        <div className="predictions">
          {weeklyData.map((el, i) => {
            return (
              <div key={i} className="prediction ">
                <div className="flex" style={{ height: "100%" }}>
                  <img
                    src={el.image}
                    style={{
                      fontSize: "3.2rem",
                      color: "var(--dark-1)",
                      marginRight: "1.6rem",
                    }}
                  />
                  <div className="predic-details">
                    <h2>{el.date}</h2>
                    <h1>{el.weather}</h1>
                  </div>
                </div>

                <span className="predic-temp">26° / 19°</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Aside;
