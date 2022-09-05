import React, { useEffect, useRef, useContext, useState } from "react";

import video1 from "../../resources/video1.mp4";
import video2 from "../../resources/video2.mp4";

import { WiCloud, WiWindy } from "react-icons/wi";

import { DataContext } from "../../context/DataContext";

import "./Toprow.scss";

const Toprow = () => {
  const video1Ref = useRef("");
  const video2Ref = useRef("");

  const { data } = useContext(DataContext);
  const [aqi, setAqi] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      video1Ref.current.play();
      video2Ref.current.play();
    }, 300);

    fetch(
      `https://api.waqi.info/feed/here/?token=1a7908b7489e06db0b8c4f00ec194b250d33b5fa`
    )
      .then((res) => res.json())
      .then((data) => setAqi(data));
  }, []);

  return (
    <div className="row">
      <div className="col">
        <div className="flex" style={{ marginBottom: "2.2rem" }}>
          <WiCloud
            style={{
              backgroundColor: "var(--light-1)",
              borderRadius: "50%",
              fontSize: "4.8rem",
              marginRight: "1.6rem",

              color: "var(--primary-color)",
            }}
          />
          <div className="col-details">
            <h1>Weather</h1>
            <h2>What's the weather</h2>
          </div>
        </div>
        <div className="temp">
          <h1>{data.current.temp.toFixed(0)}°C</h1>
          <h2>{data.current.weather[0].description}</h2>
        </div>
        <div className="row" style={{ marginTop: "1rem" }}>
          <div
            className="info"
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            <span>Pressure</span>
            <h2>{data.current.pressure}mb</h2>
          </div>
          <div
            className="info "
            style={{ backgroundColor: "var(--secondary-color-2)" }}
          >
            <span>Wind speed</span>
            <h2>{data.current.wind_speed} km/h</h2>
          </div>
          <div
            className="info"
            style={{
              backgroundColor: "var(--light-2)",
              color: "var(--secondary-color)",
            }}
          >
            <span>Humidity</span>
            <h2>87%</h2>
          </div>
        </div>
        <video ref={video1Ref} width="100%" height={"100%"} muted loop autoPlay>
          <source src={video1} type="video/mp4" />
        </video>
      </div>

      <div className="col col2">
        <div className="flex" style={{ marginBottom: "2.2rem" }}>
          <WiWindy
            style={{
              backgroundColor: "var(--light-1)",
              borderRadius: "50%",
              fontSize: "4.8rem",
              marginRight: "1.5rem",

              color: "var(--primary-color)",
            }}
          />
          <div className="col-details">
            <h1>Air Quality</h1>
            <h2>Main Pollution: PM 2.5</h2>
          </div>
        </div>
        <div className="temp">
          <h1 className="badge-heading" style={{ marginBottom: "0px" }}>
            {aqi.data.aqi}
            <span
              className="badge"
              style={{ borderRadius: "7px", fontSize: "1.2rem" }}
            >
              AQI
            </span>
          </h1>
          <h2>West Wind</h2>
        </div>

        <div className="progress-row" style={{ marginTop: "1rem" }}>
          <div className="progress row">
            <h3>GOOD</h3>
            <h3>Standard</h3>
            <h3>Hazardous</h3>
          </div>
          <div className="progress-bar">
            <div className="progress-bar-filled"></div>
          </div>
        </div>

        <video ref={video2Ref} width="100%" height={"100%"} muted loop autoPlay>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Toprow;
