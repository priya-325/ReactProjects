import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const city = "Hyderabad";
  const currentWeatherData = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  // console.log(currentWeatherData);
  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <form>
        <input type="text" placeholder="Enter city name..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
