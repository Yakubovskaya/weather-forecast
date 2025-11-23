// import { createFormAndList } from "./createFormAndList";
import { getlocalStrgData } from "./getandSavelocalStrgData";
import { getIpData } from "./getIpData";
import { getUserCityWeather } from "./getUserCityWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { showLocalStrgData } from "./showLocalStrgData";
import { inputSubmitListener } from "./inputSubmitListener";
import { listItemsClickListener } from "./listItemsClickListener";

export async function realizeWeatherForecast(el) {
  el.innerHTML = `
    <div class="weather-app">
      <div class="weather-card"></div>
      <div class="search-form">
        <form class="search-form__form">
          <input class="search-form__input" type="text" placeholder="Введите город" required autofocus>
          <button class="search-form__button" type="submit">Узнать погоду</button>
        </form>
        <div class="city-list">
          <ul class="city-list__list"></ul>
        </div>
      </div>
    </div>
  `;
  const itemsArray = await getlocalStrgData();
  const ipData = await getIpData();
  const weatherData = await getUserCityWeather(ipData);
  const weatherCard = document.querySelector(".weather-card");
  const ul = document.querySelector(".city-list__list");
  createWeatherAndMapCard(weatherCard, weatherData);
  showLocalStrgData(itemsArray, ul);
  inputSubmitListener();
  listItemsClickListener();
}
