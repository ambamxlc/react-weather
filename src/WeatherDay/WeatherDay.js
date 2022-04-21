// import "//Users//amberc//Desktop//WIN Program//react-weather//src//App//App.css";
import "./styles.module.css";
export const WeatherDay = ({
  min,
  max,
  weatherType,
  city,
  time,
  weatherKey,
  feelsLike,
  humidity,
}) => {
  return (
    <div>
      <div>Current Conditions: {weatherType}</div>
      <div>
        <img
          alt={weatherType}
          src={`https://openweathermap.org/img/wn/${weatherKey}@2x.png`}
        />
      </div>
      <div className="temp">
        Temp Hi/Low: {min} °F / {max} °F
      </div>
      <div>City Name: {city}</div>
      <div>Current Date/Time: {new Date(time * 1000).toString()}</div>
      <div>Feels Like: {feelsLike}</div>
      <div>Humidity: {humidity}</div>
    </div>
  );
};
