import { getCityInputWeather } from "./getCityInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { getlocalStrgData, savelocalStrgData } from "./getandSavelocalStrgData";
import { showLocalStrgData } from "./showLocalStrgData";
import { listItemsClickListener } from "./listItemsClickListener";

export function inputSubmitListener() {
  const form = document.querySelector(".search-form__form");
  const input = document.querySelector(".search-form__input");
  const ul = document.querySelector(".city-list__list");
  const weatherCard = document.querySelector(".weather-card");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const cityName = input.value;
    const itemsArray = await getlocalStrgData();
    const weatherData = await getCityInputWeather(cityName);
    createWeatherAndMapCard(weatherCard, weatherData);
    itemsArray.push(cityName);
    savelocalStrgData(itemsArray);
    showLocalStrgData(itemsArray, ul);
    input.value = "";
    listItemsClickListener();
  });
}
