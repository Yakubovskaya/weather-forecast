import { getInputWeather } from "./getInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { liMaker } from "./liMaker";

export async function showInputWeather() {
  const weatherCard = document.querySelector(".weather-wrapper");
  const form = document.querySelector("form");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formElement = ev.target;
    const input = formElement.querySelector("input");
    const cityName = input.value;
    liMaker(input.value);
    input.value = "";
    const weatherData = await getInputWeather(cityName);
    createWeatherAndMapCard(weatherCard, weatherData);
  });
}
