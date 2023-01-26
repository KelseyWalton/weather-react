import React from "react";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <p className="footer">
        Made by Kelsey Walton Check the{" "}
        <a href="https://github.com/KelseyWalton/weather-react">
          open-source code
        </a>
        .
      </p>
    </div>
  );
}