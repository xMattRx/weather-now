import React from "react";
import { Route, Routes } from 'react-router-dom';
import CityWeather from "./pages/CityWeather";
import Home from "./pages/Home";
import NextDays from "./pages/NextDays";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/:city" element={<CityWeather/>}/>
        <Route path="/:city/nextDays" element={<NextDays/>}/>
      </Routes>
      
  );
}

export default App;
