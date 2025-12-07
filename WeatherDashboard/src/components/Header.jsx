export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold">Weather Dashboard</h1>
        <p className="text-sm text-slate-400">
          Search any city to see current weather and 5-day forecast.
        </p>
      </div>
    </div>
  );
}
