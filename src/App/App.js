// export default App;
import { useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
// import styles from "./styles.modules.css";
import "./App.css";

export const App = () => {
  const apiKey = "d921a0596ffd6304abe53e1e25706439";
  const [weatherInfo, setWeatherInfo] = useState();
  const [zipCode, setZipCode] = useState("");

  function handleSubmit(event) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeatherInfo({
          min: res.main.temp_min,
          max: res.main.temp_max,
          weatherType: res.weather[0].description,
          city: res.name,
          time: res.dt,
          weatherKey: res.weather[0].icon,
          feelsLike: res.main.feels_like,
          humidity: res.main.humidity,
        });
      });
    event.preventDefault();
  }

  if (weatherInfo) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <label>
            Zip Code:
            <input
              type="text"
              name="name"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <p>{weatherInfo.min}°F min</p>
        <p>{weatherInfo.max}°F max</p>
        <p>{weatherInfo.weatherType}</p>
        <p>{weatherInfo.city}</p>
        <p>{new Date(weatherInfo.time * 1000).toString()}</p>
        <p>{weatherInfo.weatherKey}</p> */}
        <WeatherDay
          min={weatherInfo.min}
          max={weatherInfo.max}
          weatherType={weatherInfo.weatherType}
          city={weatherInfo.city}
          time={weatherInfo.time}
          weatherKey={weatherInfo.weatherKey}
          feelsLike={weatherInfo.feelsLike}
          humidity={weatherInfo.humidity}
        />
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Zip Code:
          <input
            type="text"
            name="name"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};
