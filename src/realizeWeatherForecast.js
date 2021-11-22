// import { createFormAndList } from "./createFormAndList";
import { getAndShowUserCityWeather } from "./getAndShowWeather";
import { inputSubmitListener } from "./inputSubmitListener";
import { listItemsClickListener } from "./listItemsClickListener";
import { getItems, showItems } from "./localStorageData";

export async function realizeWeatherForecast(el) {
  el.innerHTML = `
  <div class="container">
    <div class="weather-wrapper"></div>
  </div>
  `;
  const container = document.querySelector(".container");
  const itemsArray = await getItems();
  await getAndShowUserCityWeather();
  container.innerHTML += `
  <div class="form-wrapper">
    <div class="form">
      <form>
        <input type="text" placeholder="Введите город" required autofocus>
        <button>Узнать погоду</button>
      </form>
    </div>
    <div class="list"><ul></ul></div>
  </div>
  `;
  const ul = document.querySelector("ul");
  showItems(itemsArray, ul);
  inputSubmitListener();
  listItemsClickListener();
}
