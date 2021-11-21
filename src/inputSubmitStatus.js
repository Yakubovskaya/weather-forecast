import { getAndShowCityInputWeather } from "./getAndShowWeather";
import { liMaker, removeLi } from "./createListItems";
import { saveItems } from "./showAndSaveItemsInLocalStrg";
import { listItemsClickStatus } from "./listItemsClickStatus";

export async function inputSubmitStatus() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const cityName = input.value;
    const weather = await getAndShowCityInputWeather(cityName);
    if (weather.cod !== "404") {
      saveItems(cityName);
      liMaker(cityName);
      removeLi();
    }
    input.value = "";
    listItemsClickStatus();
  });
}
