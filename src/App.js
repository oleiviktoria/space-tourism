import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Destination from "./components/Pages/Destination";
import Crew from "./components/Pages/Crew";
import Technology from "./components/Pages/Technology";
const data = require("./data.json");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="destination"
            element={<Destination data={data.destinations} />}
          />
          <Route path="crew" element={<Crew data={data.crew} />} />
          <Route
            path="technology"
            element={<Technology data={data.technology} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
