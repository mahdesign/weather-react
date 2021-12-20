import React from "react";
import "./Forcast.css";
export default function Foracst({ day, maxTempreture, minTempreture, src }) {
  return (
    <div className="col-2">
      <div className="weather-forcast-date">{day}</div>
      <img src={src} width="42" />
      <div className="weather-forcast-tempreture">
        <span className="weather-forcast-tempreture-max">{maxTempreture}°</span>
        <span className="weather-forcast-tempreture-min">{minTempreture}°</span>
      </div>
    </div>
  );
}
