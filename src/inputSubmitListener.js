import { getAndShowCityInputWeather } from "./getAndShowWeather";
import { getlocalStrgData, savelocalStrgData } from "./getandSavelocalStrgData";
import { showLocalStrgData } from "./showLocalStrgData";
import { listItemsClickListener } from "./listItemsClickListener";

export function inputSubmitListener() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const cityName = input.value;
    const itemsArray = await getlocalStrgData();
    await getAndShowCityInputWeather(cityName);
    itemsArray.push(cityName);
    savelocalStrgData(itemsArray);
    showLocalStrgData(itemsArray, ul);
    input.value = "";
    listItemsClickListener();
  });
}
