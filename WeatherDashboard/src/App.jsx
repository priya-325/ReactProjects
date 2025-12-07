import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState("");
  const [apidata, setApiData] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  async function handleSeachSubmit(e) {
    e.preventDefault();
    const data = await fetch(url);
    const jsonData = await data.json();
    setApiData(jsonData);
  }
  console.log(apidata);
  const celsius = apidata ? Math.round(apidata.main.temp - 273.15) : null;

  const fahrenheit = apidata
    ? Math.round(((apidata.main.temp - 273.15) * 9) / 5 + 32)
    : null;

  return (
    <div className="h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center">
      <Header />
      <Search
        searchSubmit={handleSeachSubmit}
        url={url}
        city={city}
        setCity={setCity}
      />
      {apidata ? (
        <div className="">
          <p>City Name: {apidata.name}</p>
          <p>Current temperature in Celsius: {celsius}&deg;C</p>
          <p>Current temperature in Fahrenheit: {fahrenheit}&deg;F</p>
          <p>Humidity percentage: {apidata.main.humidity}%</p>
          <p>Wind speed: {apidata.wind.speed}</p>
          <p>Weather description: {apidata.weather[0].main}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
