export default function Search(props) {
  function handleSearchInput(e) {
    props.setCity(e.target.value);
  }

  return (
    <form onSubmit={props.searchSubmit} className="m-3">
      <input
        type="text"
        value={props.city}
        onChange={handleSearchInput}
        placeholder="Enter city name..."
        className="rounded-full m-2 px-4 py-2 border border-slate-300 bg-slate-900/60 text-sm font-medium focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full m-2 px-4 py-2 bg-sky-400 hover:bg-sky-600 text-white text-sm font-medium"
      >
        Search
      </button>
    </form>
  );
}
