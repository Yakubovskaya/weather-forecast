import { createFormAndList } from "./createFormAndList";
import { getAndShowUserCityWeather } from "./getAndShowWeather";
import { inputSubmitStatus } from "./inputSubmitStatus";
import { listItemsClickStatus } from "./listItemsClickStatus";
import { showItems } from "./showAndSaveItemsInLocalStrg";

export async function createWeatherForecast(el) {
  el.innerHTML = `
  <div class="container">
    <div class="form-wrapper"></div>
    <div class="weather-wrapper"></div>
  </div>
  `;
  await getAndShowUserCityWeather();
  createFormAndList();
  inputSubmitStatus();
  showItems();
  listItemsClickStatus();
}
