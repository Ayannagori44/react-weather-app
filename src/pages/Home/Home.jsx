import React, { useEffect, useState } from "react";

import "./Home.scss";

import Navbar from "../../components/Navbar/Navbar";
import Aside from "../../components/Aside/Aside";
import Toprow from "../../components/Toprow/Toprow";

import { DataContext } from "../../context/DataContext";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=11&lon=11&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div className="home">
      <DataContext.Provider value={{ data }}>
        <section className="main-section">
          <Navbar />
          <Toprow />
        </section>

        <section className="side-section">
          <Aside />
        </section>
      </DataContext.Provider>
    </div>
  );
};

export default Home;
