import { useEffect, useState } from "react";
import weatherAPI from "../services/weatherAPI";

const Weather = ({ city }) => {
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    if (city) {
      weatherAPI
        .getAll(city)
        .then((res) => setCityWeather(res))
        .catch((error) => {
          console.log(error);
          setCityWeather(null);
        });
    }
  }, [city]);

  if (!cityWeather) {
    return <div>City don't finded</div>;
  }

  const icon = `https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`;
  return (
    <>
    <h2>Weather in {city}</h2>
      <div>Temperature {(cityWeather.main.temp - 273.15).toFixed(2)}</div>
      <img src={icon} alt={cityWeather.weather[0].description} />
      <div>Wind {cityWeather.wind.speed}m/s</div>
    </>
  );
};
export default Weather;
