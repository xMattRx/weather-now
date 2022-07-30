import React from "react";
import { Route, Routes } from 'react-router-dom';
import CityWeather from "./pages/CityWeather";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/:city" element={<CityWeather/>}/>
      </Routes>
  );
}

export default App;
