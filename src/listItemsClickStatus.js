import { getAndShowCityInputWeather } from "./getAndShowWeather";

export function listItemsClickStatus() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.addEventListener("click", async () => {
      const cityName = item.textContent;
      getAndShowCityInputWeather(cityName);
    });
  });
}
