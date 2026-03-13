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

  const nextDays = props.fiveDayForecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );
  // console.log(nextDays);
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
        <div className="grid gap-4">
          {nextDays.map((day) => (
            <div
              key={day.dt}
              className="bg-slate-900/50 rounded-2xl p-4 text-center"
            >
              <p className="text-slate-400 text-sm">{day.dt_txt}</p>
              <img
                src={icon(day.weather[0].icon)}
                alt={day.weather[0].description}
                className="w-16 h-16 mx-auto"
              />

              <p className="text-slate-300 capitalize text-sm">
                {day.weather[0].description}
              </p>

              <div className="mt-3">
                <p className="text-lg font-semibold">
                  {Math.round(day.main.temp)}°C
                </p>
                <p className="text-slate-400 text-sm">
                  {Math.round(toFahrenheit(day.main.temp))}°F
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
