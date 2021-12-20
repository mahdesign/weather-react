import React from "react";
import "./Tempreture.css";

export default function Tempreture({ humidity, wind, degree }) {
  return (
    <div className="Tempreture">
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-tempreture">
            <img
              src="http://openweathermap.org/img/wn/02n@2x.png"
              className="float-left"
            />
            <div className="float-left">
              <strong>{degree}</strong>
              <span className="units">°C|°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{humidity}%</li>
            <li>Wind:{wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
