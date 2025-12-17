import Header from "./components/Header";
import { useState } from "react";

const API_BASE = "https://api.openweathermap.org/data/2.5";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  async function fetchWeather() {
    const currentUrl = `${API_BASE}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `${API_BASE}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl),
    ]);
    const currentJson = await currentRes.json();
    const forecastJson = await forecastRes.json();
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-lg p-8">
        <Header />

        <div className="flex gap-4 mb-5">
          <form className="flex flex-1 gap-2">
            <input
              type="text"
              placeholder="Enter city..."
              className="flex-1 px-4 py-2 bg-slate-700 rounded-full outline-none"
            />
            <button className="bg-sky-500 rounded-full px-4 py-2">
              Search
            </button>
          </form>
          <div className="flex items-center gap-2">
            <span>Units:</span>
            <div>
              <button>°C</button>
              <button>°F</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
