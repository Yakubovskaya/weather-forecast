import { getCityInputWeather } from "./getCityInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";

export function listItemsClickListener() {
  const listItems = document.querySelectorAll(".city-list__item");
  listItems.forEach((item) => {
    item.addEventListener("click", async () => {
      const weatherCard = document.querySelector(".weather-card");
      const cityName = item.textContent;
      const weatherData = await getCityInputWeather(cityName);
      createWeatherAndMapCard(weatherCard, weatherData);
    });
  });
}
