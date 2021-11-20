import { getInputWeather } from "./getInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { liMaker } from "./liMaker";
import { removeLi } from "./removeLi";
import { saveItems } from "./saveItems";
import { showListItemsWeather } from "./showListItemsWeather";

export async function showInputWeather() {
  const weatherCard = document.querySelector(".weather-wrapper");
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const cityName = input.value;
    saveItems();
    liMaker(input.value);
    removeLi();
    input.value = "";
    const weatherData = await getInputWeather(cityName);
    createWeatherAndMapCard(weatherCard, weatherData);
    showListItemsWeather();
  });
}
