import { getInputWeather } from "./getInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";

export function showListItemsWeather() {
  const listItems = document.querySelectorAll("li");
  const weatherCard = document.querySelector(".weather-wrapper");
  listItems.forEach((item) => {
    item.addEventListener("click", async () => {
      const cityName = item.textContent;
      const weatherData = await getInputWeather(cityName);
      createWeatherAndMapCard(weatherCard, weatherData);
    });
  });
}
