import React from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
export default App;
