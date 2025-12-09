import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

const API_BASE = "https://api.openweathermap.org/data/2.5";

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-lg p-8">
        <Header />

        <SearchBar />

        {/* <Content /> */}
      </div>
    </div>
  );
}

export default App;
