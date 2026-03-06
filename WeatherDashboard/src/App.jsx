import Header from "./components/Header";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Forecast from "./components/Forecast";

const API_BASE = "https://api.openweathermap.org/data/2.5";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);

  async function fetchWeather(city) {
    const currentWeatherURL = `${API_BASE}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const fiveDayForecastURL = `${API_BASE}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const [currentWeatherResponse, fiveDayForecastResponse] = await Promise.all(
      [fetch(currentWeatherURL), fetch(fiveDayForecastURL)],
    );
    const currentWeatherJSON = await currentWeatherResponse.json();
    const fiveDayForecastJSON = await fiveDayForecastResponse.json();
    // console.log(currentWeatherDataResponseJSON);
    // console.log(fiveDayForecastResponseJSON);
    setCurrentWeather(currentWeatherJSON);
    setFiveDayForecast(fiveDayForecastJSON);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-lg p-8">
        <Header />
        <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
