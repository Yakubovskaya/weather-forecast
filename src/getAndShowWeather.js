import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { getIpData } from "./getIpData";
import { getUserCityWeather } from "./getUserCityWeather";
import { getCityInputWeather } from "./getCityInputWeather";

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
}
