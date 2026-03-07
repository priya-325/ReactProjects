export default function Forecast(props) {
  if (!props.currentWeather || !props.fiveDayForecast.list) {
    return (
      <div className="text-slate-400 text-sm">
        Search for a city to see the weather.
      </div>
    );
  }
  // Converts Celsius to Fahrenheit
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  function icon(code) {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
  }
  // console.log(props.fiveDayForecast);
  return (
    <div className="space-y-8">
      {/* Current Weather Section */}
      <section className="grid gap-6">
        {/* main weather card */}
        <div className="bg-slate-900/50 rounded-2xl p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-slate-400 text-sm">Current Weather</p>
              {/* city name and country */}
              <h2 className="text-3xl font-semibold mt-1">
                {props.currentWeather.name}, {props.currentWeather.sys.country}
              </h2>
              {/* weather description */}
              <p className="text-slate-300 mt-2">
                {props.currentWeather.weather[0].description}
              </p>
            </div>
            {/* weather icon */}
            <img
              src={icon(props.currentWeather.weather[0].icon)}
              alt={props.currentWeather.weather[0].description}
              className="w-20 h-20"
            />
          </div>
          {/* Temperature in Celsius and Fahrenheit */}
          <div className="mt-6">
            <p className="text-5xl font-bold">
              {Math.round(props.currentWeather.main.temp)}°C
            </p>
            <p className="text-slate-400 mt-2 text-lg">
              {Math.round(toFahrenheit(props.currentWeather.main.temp))}°F
            </p>
          </div>
        </div>
        {/* weather details card */}
        <div className="bg-slate-900/50 rounded-2xl p-6 grid grid-cols-1 gap-4">
          {/* humidity */}
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">Humidity</p>
            <p className="text-2xl font-semibold">
              {props.currentWeather.main.humidity}%
            </p>
          </div>
          {/* wind speed */}
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">Wind Speed</p>
            <p className="text-2xl font-semibold">
              {props.currentWeather.wind.speed} m/s
            </p>
          </div>
        </div>
      </section>
      {/* 5-day forecast section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">5-Day Forecast</h3>
        {/* forecast card */}
        <div>
          <p>{props.fiveDayForecast.list[0].dt_txt}</p>
        </div>
      </section>
    </div>
  );
}
