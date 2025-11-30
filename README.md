# Projects

Create App: npm create vite@latest {appName}
Run App: npm run dev

1. Chef Claude
2. Meme
3. Tenzies
4. Assembly: Endgame
5. Weather Dashboard

# Weather Dashboard

- This project involves building a simple Weather Dashboard using React.js. The app will fetch real-time weather data from the OpenWeather API and display it in a user-friendly interface. Users can search for a city to see its current weather conditions, including temperature, humidity, and forecast.

# Tech Stack

- Frontend: React.js, JavaScript, CSS
- API: OpenWeather API (free)
- State Management: React Context API or Redux (optional)

# Features & Requirements

- Users can search for a city to fetch its real-time weather data.
- Display key weather details, including:
- Current temperature in Celsius and Fahrenheit
- Humidity percentage
- Wind speed
- Weather description (e.g., Clear, Cloudy, Rainy)
- Weather icons based on the conditions
- Provide a 5-day weather forecast with daily highs and lows.
- Store the last searched city in local storage to persist across sessions.
- Responsive design to support both mobile and desktop users.
- Show an error message when a user searches for an invalid city.
- Implement a loading indicator while fetching data.
- Allow users to toggle temperature units (Celsius/Fahrenheit).
- Implement dark mode for a better user experience.
- Deploy the app on Vercel or Netlify.

# API Endpoints

- Current Weather Data:
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`
- 5-Day Forecast:
  `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}`
- Replace `{city}` with the city name.
- Replace `{API_KEY}` with your free API key from OpenWeather.

# Setup Instructions

1. Clone the repository: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Get a free API key from OpenWeather (https://openweathermap.org/api)
4. Create a `.env` file and add `REACT_APP_WEATHER_API_KEY=<your-api-key>`
5. Run the app: `npm start`
6. Deploy to Vercel/Netlify for a live demo.
