import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { getIpData } from "./getIpData";
import { getUserCityWeather } from "./getUserCityWeather";

async function getCityInputWeather(cityName) {
  const API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_WEATHER}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
  return data;
}

export async function getAndShowUserCityWeather() {
  const weatherCard = document.querySelector(".weather-wrapper");
  const ipData = await getIpData();
  const weatherData = await getUserCityWeather(ipData);
  createWeatherAndMapCard(weatherCard, weatherData);
}

export async function getAndShowCityInputWeather(cityName) {
  const weatherCard = document.querySelector(".weather-wrapper");
  const weatherData = await getCityInputWeather(cityName);
  createWeatherAndMapCard(weatherCard, weatherData);
  return weatherData;
}
