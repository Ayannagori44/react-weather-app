import React from "react";

import "./Home.css";

import { WiCloud } from "react-icons/wi";

import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-section">
        <div className="top-row">
          <div className="col">
            <div className="col-top">
              <WiCloud style={{ fontSize: "40px", marginRight: "1rem" }} />
              <div className="col-details">
                <h1>Weather</h1>
                <h2>what's the weather</h2>
              </div>
            </div>
            <div className="temp">
              <h1>22°C</h1>
              <h2>Party Cloudy</h2>
            </div>
            <div className="weather-details">
              <div
                className=" detail"
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <span>Pressure</span>
                <h2>800mb</h2>
              </div>
              <div className=" detail" style={{ backgroundColor: "green" }}>
                <span>Rain</span>
                <h2>4.5km</h2>
              </div>
              <div
                className=" detail"
                style={{
                  backgroundColor: "#fff",
                  color: "var(--secondary-color)",
                }}
              >
                <span>Humidity</span>
                <h2>87%</h2>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="col col2">
            <div className="col-top">
              <WiCloud style={{ fontSize: "40px", marginRight: "1rem" }} />
              <div className="col-details">
                <h1>Weather</h1>
                <h2>what's the weather</h2>
              </div>
            </div>
            <div className="temp">
              <h1>22°C</h1>
              <h2>Party Cloudy</h2>
            </div>
            <div className="weather-details">
              <div
                className=" detail"
                style={{ backgroundColor: "var(--secondary-color)" }}
              >
                <span>Pressure</span>
                <h2>800mb</h2>
              </div>
              <div className=" detail" style={{ backgroundColor: "green" }}>
                <span>Rain</span>
                <h2>4.5km</h2>
              </div>
              <div
                className=" detail"
                style={{
                  backgroundColor: "#fff",
                  color: "var(--secondary-color)",
                }}
              >
                <span>Humidity</span>
                <h2>87%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
