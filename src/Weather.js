import React, { useState } from "react";
import axios from "axios";
import "./App.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  const apiKey = "4e5ab8bbb2e28e20319b7cac81da45fb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=daily&appid=${apiKey}&units=metric`;

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function getWeather(event) {
    event.preventDefault();
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setLoaded(false);
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={getWeather}>
        <input
          type="search"
          onChange={updateCity}
          placeholder="Enter a city..."
        />
        <input type="submit" />
      </form>
      {loaded ? (
        <ul>
          <li>Temperature: {Math.round(weather.temp)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} m/s</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="icon"
            />
          </li>
        </ul>
      ) : null}
    </div>
  );
}
