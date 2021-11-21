import { liMaker } from "./createListItems";

export function showItems() {
  const data = JSON.parse(localStorage.getItem("items"));
  data.forEach((item) => {
    liMaker(item);
  });
}

export function saveItems(cityName) {
  const itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  itemsArray.push(cityName);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  if (itemsArray.length > 10) {
    itemsArray.splice(0, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  }
}
