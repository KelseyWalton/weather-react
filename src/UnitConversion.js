import React, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function convertMiles() {
    return Math.round(props.kilometers / 1.609);
  }

  if (unit === "celsius") {
    return (
      <div>
        <li className="current-temp">
          {Math.round(props.celsius)}
          <sup className="temperature-scales">
            <div className="celsius"> °C </div>|
            <div className="fahrenheit">
              <a href className="fahrenheit-link active" onClick={showCelsius}>
                {" "}
                °F
              </a>
            </div>
          </sup>
        </li>
        <li className="humidity">Humidity {props.humidity}%</li>
        <li className="wind">Wind {Math.round(props.kilometers)} kph</li>
      </div>
    );
  } else {
    return (
      <div>
        <li className="current-temp">
          {convertFahrenheit()}
          <sup className="temperature-scales">
            <div className="celsius">
              <a href className="celsius-link active" onClick={showFahrenheit}>
                {" "}
                °C{" "}
              </a>
            </div>
            |<div className="fahrenheit"> °F</div>
          </sup>
        </li>
        <li className="humidity">Humidity {props.humidity}%</li>
        <li className="wind">Wind {convertMiles()} mph</li>
      </div>
    );
  }
}
