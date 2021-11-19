import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { getUserCityWeather } from "./getUserCityWeather";

export async function showUserCityWeather() {
  const weatherCard = document.querySelector(".weather-wrapper");
  const weatherData = await getUserCityWeather();
  createWeatherAndMapCard(weatherCard, weatherData);
}
