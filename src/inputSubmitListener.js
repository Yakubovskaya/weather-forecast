import { getAndShowCityInputWeather } from "./getAndShowWeather";
import { getItems, saveItems, showItems } from "./localStorageData";
import { listItemsClickListener } from "./listItemsClickListener";

export function inputSubmitListener() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const cityName = input.value;
    const itemsArray = await getItems();
    await getAndShowCityInputWeather(cityName);
    itemsArray.push(cityName);
    saveItems(itemsArray);
    showItems(itemsArray, ul);
    input.value = "";
    listItemsClickListener();
  });
}
