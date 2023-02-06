import React from "react";
import CurrentDate from "./CurrentDate";
import UnitConversion from "./UnitConversion";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="row current-stats">
        <div className="col-1 icon">
          <img
            src={props.data.iconUrl}
            alt="weather icon"
            className="current-icon"
          />
        </div>
        <ul className="col-6 current-weather">
          <UnitConversion
            celsius={props.data.temperature}
            kilometers={props.data.wind}
            humidity={props.data.humidity}
          />
        </ul>
        <ul className="col-5 location">
          <li className="current-city">{props.data.city}</li>
          <li className="day-time">
            <CurrentDate date={props.data.date} />
          </li>
          <li className="current-weather-desc text-capitalize">
            {props.data.description}
          </li>
        </ul>
      </div>
    </div>
  );
}
