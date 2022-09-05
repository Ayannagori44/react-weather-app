import React, { useEffect, useState } from "react";

import "./Home.scss";

import Navbar from "../../components/Navbar/Navbar";
import Aside from "../../components/Aside/Aside";
import Toprow from "../../components/Toprow/Toprow";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=51.5072&lon=0.1276&exclude=hourly,minutely&units=metric&appid=${process.env.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="home">
      {console.log(data)}
      <section className="main-section">
        <Navbar />

        <Toprow />
      </section>

      <section className="side-section">
        <Aside />
      </section>
    </div>
  );
};

export default Home;
