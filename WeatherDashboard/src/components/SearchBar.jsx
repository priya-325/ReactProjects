import { useState } from "react";

export default function SearchBar(props) {
  function handleClick(e) {
    e.preventDefault();
    props.fetchWeather(props.city);
  }
  return (
    <div className="flex gap-4 mb-5">
      <form className="flex flex-1 gap-2">
        <input
          type="text"
          value={props.city}
          placeholder="Enter city..."
          onChange={(e) => {
            props.setCity(e.target.value);
          }}
          className="flex-1 px-4 py-2 bg-slate-700 rounded-full outline-none"
        />
        <button
          onClick={handleClick}
          className="bg-sky-500 rounded-full px-4 py-2"
        >
          Search
        </button>
      </form>
      {/* <div className="flex items-center gap-2">
        <div>
          <button>°C</button>
          <button>°F</button>
        </div>
      </div> */}
    </div>
  );
}
