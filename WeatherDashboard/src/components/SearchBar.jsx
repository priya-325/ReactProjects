export default function SearchBar() {
  return (
    <div className="flex gap-4 mb-5">
      <form className="flex flex-1 gap-2">
        <input type="text" placeholder="Enter city..." />
        <button>Search</button>
      </form>
      <div className="flex items-center gap-2">
        <span>Units:</span>
        <div>
          <button>°C</button>
          <button>°F</button>
        </div>
      </div>
    </div>
  );
}
