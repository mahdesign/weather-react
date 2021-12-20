import React from "react";
import "./City.css";
export default function City({ cityName, date, description }) {
  return (
    <div>
      <h1>{cityName}</h1>
      <ul>
        <li>{date}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
}
